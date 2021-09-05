import Vuex from 'vuex'
import Vue from 'vue'
import store from './store'
import vuelidate from 'vuelidate'

Vue.use(vuelidate)

// cutom outers
// const PageRegister = () => import("./pages/PageRegister.vue");

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {

  Vue.use(Vuex),
  Vue.mixin({store: store})
  //router.addRoute([
    // { path: '/register/', component: PageRegister, name: 'Register', meta: {requiresGuest: true} }
  //]);
}
