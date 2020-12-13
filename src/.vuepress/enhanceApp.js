import Vuex from 'vuex'
import Vue from 'vue'
import store from './store/index'
import vuelidate from 'vuelidate'
// import VueDisqus from 'vue-disqus'

Vue.use(vuelidate)

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {

  Vue.use(Vuex),
  Vue.mixin({store: store}),
  router.addRoutes([

  ]);
  /* Vue.use(VueDisqus, {
    shortname: 'your_shortname_disqus'
  }); */
}
