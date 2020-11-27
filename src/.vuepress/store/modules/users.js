import firebase from 'firebase'
import Vue from 'vue'
import {countObjectProperties, removeEmptyProperties} from '../../utils'
// import {makeAppendChildToParent} from '../assetHelpers'

export default {
    namespaced: true,
    state:{
       items:{}
    }, 
    actions: {
        fetchUser({state, commit}, {userId}) {
            return new Promise((resolve, reject) => {
                firebase.database().ref("users").child(userId).once('value', snapshot => {
                    commit('setUser', { id: snapshot.key, item: snapshot.val() })
                    resolve(state.items[userId])
                })
            })
        },
        createUser({state, commit}, {id, email, name, username, avatar = null}) {
            return new Promise((resolve, reject) => {
                const registeredAt = Math.floor(Date.now() / 1000)
                const usernameLower = username.toLowerCase()
                email = email.toLowerCase()
                const user = {avatar, email, username, name, usernameLower, registeredAt, posts:{}}
                firebase.database().ref('/users').child(id).set(user)
                    .then(() => {
                        commit('setUser', { id: id, item: user })
                        resolve(state.items[id])
                    })                
            })
        },
        updateUser({ commit }, user){
            const updates = {
                avatar: user.avatar,
                username: user.name,
                name: user.name,
                bio: user.bio,
                website: user.website,
                email: user.email,
                location: user.location
            }
            return new Promise((resolve, reject) => {
                firebase.database().ref('users').child(user['.key']).update(removeEmptyProperties(updates))
                    .then(() => {
                        commit('setUser', { id: user['.key'], item: user })
                        resolve(user)
                    })
            })
        }
    },
    mutations: {
        setUser(state, { id, item }) {
            item['.key'] = id
            Vue.set(state.items, id, item)
        },
        appendPostToUser(state, {childId, parentId, lnCode}) {
            const resource = state.items[parentId][lnCode]
            if(!resource['posts']) {
                Vue.set(resource, 'posts', {})
            }
            Vue.set(resource['posts'], childId, childId)
        }
    },
    getters: {        
        userPostsCount: state => (id, lncode) => countObjectProperties(state.items[id][lncode]),
        userPosts: (state, getters, rootState) => (id, lncode) => {
            const user = state.items[id]
            if(user[lncode]){
                return Object.values(rootState.posts[lncode].items)
                    .filter(post => post.userId === id)
            }
            return []
        },
    }
}