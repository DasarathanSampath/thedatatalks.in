import firebase from 'firebase'

export default {
    namespaced: true,
    state: {
        authId: null,
        unsubscribeAuthObserver: null
    },
    getters: {
        authUser(state, getters, rootState) {
            return state.authId ? rootState.users.items[state.authId] : null
        }
    },
    actions:{
        authIdCurrent(state, rootState) {
            return state.authId ? rootState.users.items[state.authId] : null
        },
        initAuthentication({dispatch, commit, state}) {        
            return new Promise((resolve, reject) => {
                // unsubscribe observer if already listening
                if(state.unsubscribeAuthObserver){
                    state.unsubscribeAuthObserver()
                }
                const unsubscribe = firebase.auth().onAuthStateChanged(user => {
                    if(user) {
                      dispatch('fetchAuthUser')
                        .then(dbuser => resolve(dbuser))
                    } else {
                        resolve(null)
                    }
                  })
                commit('unsubscribeAuthObserver', unsubscribe)
            })
        },

        registerUserWithEmailAndPassword({dispatch}, {email, password, name, username, avatar = null}) {
            return firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(({user}) => {
                        return dispatch('users/createUser', {id: user.uid, email, password, name, username, avatar}, {root: true})
                    })
                    .then(() => dispatch('fetchAuthUser'))
        },

        signInWithEmailAndPassword (context, {email, password}) {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .catch((error) => alert('Error in SignIn' + error.message))
        },

        signInWithGoogle({dispatch}) {
            const provider = new firebase.auth.GoogleAuthProvider()
            return firebase.auth().signInWithPopup(provider)
                .then(data => {
                    const user = data.user
                    firebase.database().ref('users').child(user.uid).once('value', snapshot => {
                        if(!snapshot.exists()){
                            return dispatch('users/createUser', {id: user.uid, name: user.displayName, email: user.email, username: user.email, avatar: user.photoURL}, {root: true})
                            .then(() => dispatch('fetchAuthUser'))
                        }
                    })
                })
        },

        signOut({commit}){
            return firebase.auth().signOut()
                .then(() => {
                    commit('setAuthId', null)
                })
        },

        fetchAuthUser({dispatch, commit, state}){
            const userId = firebase.auth().currentUser.uid
            const lnCode = 'en'
            return new Promise((resolve, reject) => {
                firebase.database().ref('users').child(userId).once('value', snapshot => {
                    if(snapshot.exists()){
                        return dispatch('users/fetchUser', {userId: userId, lnCode}, {root: true})
                            .then(user => {
                                commit('setAuthId', userId)
                                resolve(user)
                        })
                    } else {
                        resolve(null)
                    }
                })
            })       
        }
    },
    mutations:{
        setAuthId (state, id) {
            state.authId = id
        },
        unsubscribeAuthObserver (state, unsubscribe) {
            state.unsubscribeAuthObserver = unsubscribe
        }

    }
}