import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import posts from './modules/posts'
import articles from './modules/articles'
import users from './modules/users'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters,
  actions,
  mutations,
  modules: {
    posts,
    articles,
    users,
    auth
  }
})
