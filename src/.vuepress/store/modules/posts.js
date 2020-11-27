import firebase from 'firebase'
import Vue from 'vue'

export default {
    namespaced: true,
    state:{
        "en-US":{
            items:{}
        },
        "ta-IN":{
            items:{}
        }
    }, 
    actions: {
        createPost({commit, state, rootState}, post) {
            const postId = firebase.database().ref(`posts/${post.lncode}`).push().key
            
            post.userId = rootState.auth.authId
            const lnCode = post.lncode
            post.publishedAt = Math.floor(Date.now() / 1000)
            
            const updates = {}
            updates[`posts/${post.lncode}/${postId}`] = post
            updates[`articles/${post.lncode}/${post.articleId}/posts/${postId}`] = postId
            updates[`articles/${post.lncode}/${post.articleId}/contributors/${post.userId}`] = post.userId
            updates[`users/${post.userId}/${post.lncode}/${postId}`] = postId
                    
            firebase.database().ref().update(updates)
                .then(() => {
                    commit('setItem', {resource: 'posts', item: post, id: postId}, {root: true})
                    commit('articles/appendPostToArticle', {parentId: post.articleId, childId: postId, lnCode: lnCode}, {root: true})
                    commit('articles/appendContributorsToArticle', {parentId: post.articleId, childId: post.userId, lnCode: lnCode}, {root: true})
                    commit('users/appendPostToUser', {parentId: post.userId, childId: postId, lnCode: lnCode}, {root: true})
                    return Promise.resolve(state[post.lncode].items[postId])
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
        fetchPosts: ({dispatch}, {ids, lnCode}) => dispatch('fetchItems', {resource: 'posts', emoji: 'list of posts', ids, lnCode: lnCode}, {root: true})
    },
    mutations: {
        setPost(state, {post, postId}){
            Vue.set(state[post.lncode].items, postId, post)
        }
    },
    getters: {

    }
}