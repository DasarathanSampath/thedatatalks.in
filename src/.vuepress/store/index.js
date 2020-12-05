import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state:{
        authId: null,
        unsubscribeAuthObserver: null,
        users:{},
        articles:{},
        posts:{}
        // userId: 'dasa@gmail.com'
    },
    getters:{},
    actions:{

    },
    mutations:{

    }
})
