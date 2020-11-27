import firebase from 'firebase'

export default {
    fetchItem({state, commit}, {id, lnCode, emoji, resource}) {
        return new Promise((resolve, reject) => {
            firebase.database().ref(resource + '/' + lnCode).child(id).once('value', snapshot => {
                if(snapshot.val() !== null){
                    commit('setItem', { resource, id: snapshot.key, item: snapshot.val() })
                    resolve(state[resource][lnCode].items[id])
                }
                resolve(null)                
            })
        })
    },
    
    fetchItems({dispatch}, {ids, resource, emoji, lnCode}) {
        return Promise.all(ids.map(id => dispatch('fetchItem', {id, resource, emoji, lnCode})))
    }
}