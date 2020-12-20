import Vue from 'vue'

export const makeAppendChildToParent = ({parent, child}) =>
    (state, {childId, parentId, lnCode}) => {
        const resource = state[parent][lnCode][parentId]
            if(!resource[child]) {
                Vue.set(resource, child, {})
            }
        Vue.set(resource[child], childId, childId)
    }
