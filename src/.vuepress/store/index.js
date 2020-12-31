import Vue from 'vue'
import Vuex from 'vuex'
import {countObjectProperties, removeEmptyProperties} from '../utils'
import {makeAppendChildToParent} from './assetHelpers'

Vue.use(Vuex)

export default new Vuex.Store({

    state:{
        authUser: null,
        authId: null,
        unsubscribeAuthObserver: null,
        users: {},
        articles: {
            'en-US': {},
            'ta-IN': {}
        },
        posts:{
            'en-US': {},
            'ta-IN': {}
        }
    },
    getters:{
        authUser(state) {
            return state.authUser ? state.authUser : null
        },
        authId(state) {
            return state.authId ? state.authId : null
        },
        registeredUsername(state) {
            return state.users[state.authId] ? state.users[state.authId].username : null
        },
        userPostsCount: state => (id, lncode) => countObjectProperties(state.users[id][lncode]),
        userPosts: (state, getters, rootState) => (id, lncode) => {
            const user = state.items[id]
            if(user[lncode]){
                return Object.values(state.users[lncode])
                    .filter(post => post.userId === id)
            }
            return []
        }
    },
    actions:{

        signInWithEmailAndPassword(context, {email, password}) {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .catch(error => alert(error.message))
        },
        initAuthentication ({dispatch, commit, state}) {
            return new Promise((resolve, reject) => {
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

        fetchAuthUser({dispatch, commit, state}){
            const userId = firebase.auth().currentUser.uid
            const user = firebase.auth().currentUser
            return new Promise((resolve, reject) => {
                firebase.database().ref('users').child(userId).once('value', snapshot => {
                    if(snapshot.exists()){
                        commit('setAuthUser', user)
                        return dispatch('fetchUser', {userId: userId})
                            .then(user => {
                                commit('setAuthId', userId)
                                resolve(user)
                        })
                    } else {
                        resolve(null)
                    }
                })
            })       
        },

        fetchUser({state, commit}, {userId}) {
            return new Promise((resolve, reject) => {
                firebase.database().ref("users").child(userId).once('value', snapshot => {
                    commit('setUser', { id: snapshot.key, item: snapshot.val() })
                    resolve(state.users[userId])
                })
            })
        },

        signOut({commit}){
            return firebase.auth().signOut()
                .then(() => {
                    commit('setAuthId', null)
                    commit('setAuthUser', null)
                })
        },

        signInWithGoogle({dispatch}) {
            const provider = new firebase.auth.GoogleAuthProvider()
            return firebase.auth().signInWithPopup(provider)
                .catch(error => alert(error.message))
                .then(data => {
                    const user = data.user     
                    firebase.database().ref('users').child(user.uid).once('value', snapshot => {
                        if(!snapshot.exists()){
                            const registeredAt = Math.floor(Date.now() / 1000)
                            const username = data.additionalUserInfo.profile.name
                            const email = user.email
                            const id = user.uid
                            const photoURL = user.photoURL                    
                            const userData = {email, username: username.toLowerCase(), registeredAt, photoURL}
                            firebase.database().ref('/users').child(id).set(userData)
                                .then(() => dispatch('fetchAuthUser'))
                        }
                    })
                })
        },

        registerUserWithEmailAndPassword({dispatch}, {email, password, username}) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .catch(error => alert(error.message))
                .then(({user}) => {
                    const registeredAt = Math.floor(Date.now() / 1000)
                    const email = user.email
                    const id = user.uid
                    const userData = {email, username:username.toLowerCase(), registeredAt}
                    firebase.database().ref('/users').child(id).set(userData)
                        .then(() => dispatch('fetchAuthUser'))
                })
        },

        updateProfile({ state, commit }, {username, photoURL}){
            const updates = {
                username: username.toLowerCase(),
                photoURL: photoURL                
            }
            return new Promise((resolve, reject) => {
                firebase.database().ref('users').child(state.authId).update(removeEmptyProperties(updates))
                    .then(() => {
                        const user = removeEmptyProperties(updates)
                        commit('setUser', { id: state.authId, item: user })
                        resolve(user)
                    })
            })
        },

        updateEmail({ state, commit }, {email}){
            const updates = {
                email: email,
            }
            return new Promise((resolve, reject) => {
                firebase.database().ref('users').child(state.authId).update(removeEmptyProperties(updates))
                    .then(() => {
                        const user = removeEmptyProperties(updates)
                        commit('setUser', { id: state.authId, item: user })
                        resolve(user)
                    })
            })
        },


        //// Articles & posts
        createPost({commit, state}, post) {
            const postId = firebase.database().ref(`posts/${post.lncode}`).push().key
            
            post.userId = state.authId
            const lnCode = post.lncode
            post.publishedAt = Math.floor(Date.now() / 1000)
            
            const updates = {}
            updates[`posts/${post.lncode}/${postId}`] = post
            updates[`articles/${post.lncode}/${post.articleId}/posts/${postId}`] = postId
            updates[`articles/${post.lncode}/${post.articleId}/contributors/${post.userId}`] = post.userId
            updates[`users/${post.userId}/${post.lncode}/${postId}`] = postId
                    
            firebase.database().ref().update(updates)
                .then(() => {
                    commit('setItem', {resource: 'posts', item: post, id: postId})
                    commit('appendPostToArticle', {parentId: post.articleId, childId: postId, lnCode: lnCode})
                    commit('appendContributorsToArticle', {parentId: post.articleId, childId: post.userId, lnCode: lnCode})
                    commit('appendPostToUser', {parentId: post.userId, childId: postId, lnCode: lnCode})
                    return Promise.resolve(state['posts'][post.lncode][postId])
                })
        },
        updatePost({commit, state, rootState}, {id, text, lncode}){
            return new Promise((resolve, reject) => {
                const post = state[lncode].items[id]
                const edited = {
                    at: Math.floor(Date.now() / 1000),
                    by: rootState.auth.authId
                }
    
                const updates = {text, edited}
                firebase.database().ref(`posts/${lncode}`).child(id).update(updates)
                    .then(() => {
                        commit('setPost', {postId: id, post: {...post, text, edited}})
                        resolve(post)
                    })            
            })
        },
        fetchArticle({dispatch}, {articleId, lnCode}) {
            return dispatch('fetchItem', {resource: 'articles', id: articleId, lnCode: lnCode})
        },
        fetchPosts({dispatch}, {ids, lnCode}){
            return dispatch('fetchItems', {resource: 'posts', ids, lnCode: lnCode})
        },

        /// common 
        fetchItem({state, commit}, {id, lnCode, resource}) {
            return new Promise((resolve, reject) => {
                firebase.database().ref(resource + '/' + lnCode).child(id).once('value', snapshot => {
                    if(snapshot.val() !== null){
                        commit('setItem', { resource, id: snapshot.key, item: snapshot.val() })
                        resolve(state[resource][lnCode][id])
                    }
                    resolve(null)                
                })
            })
        },
        
        fetchItems({dispatch}, {ids, resource, lnCode}) {
            return Promise.all(ids.map(id => dispatch('fetchItem', {id, resource, lnCode})))
        }
    },
    mutations:{
        setAuthId (state, userId) {
            state.authId = userId
        },
        setAuthUser (state, user) {
            state.authUser = user
        },
        unsubscribeAuthObserver (state, unsubscribe) {
            state.unsubscribeAuthObserver = unsubscribe
        },
        setUser(state, { id, item }) {
            item['.key'] = id
            Vue.set(state.users, id, item)
        },
        setItem(state, { resource, id, item }) {
            item['.key'] = id
            Vue.set(state[resource][item.lncode], id, item)
        },
        appendPostToArticle: makeAppendChildToParent({parent: 'articles', child: 'posts'}),
        appendContributorsToArticle: makeAppendChildToParent({parent: 'articles', child: 'contributors'}),
        appendPostToUser(state, {childId, parentId, lnCode}) {
            const resource = state['users'][parentId]
            if(!resource[lnCode]) {
                Vue.set(resource, lnCode, {})
            }
            Vue.set(resource[lnCode], childId, childId)
        }
    }
})
