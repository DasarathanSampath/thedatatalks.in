import {makeAppendChildToParent} from '../assetHelpers'

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
        fetchArticle: ({dispatch}, {articleId, lnCode}) => dispatch('fetchItem', {resource: 'articles', id: articleId, lnCode: lnCode, emoji: 'Fetch Article dispatch'}, {root: true})
    },
    mutations: {
        appendPostToArticle: makeAppendChildToParent({parent: 'articles', child: 'posts'}),
        appendContributorsToArticle: makeAppendChildToParent({parent: 'articles', child: 'contributors'})
    },
    getters: {

    }
}