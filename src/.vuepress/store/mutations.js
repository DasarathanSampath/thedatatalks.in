import Vue from 'vue'

export default {
    setItem(state, { resource, id, item }) {
        item['.key'] = id
        Vue.set(state[resource][item.lncode].items, id, item)
    }
}