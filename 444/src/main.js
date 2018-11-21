// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
<<<<<<< HEAD

Vue.config.productionTip = false

=======
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI); //注册mobile UI
Vue.config.productionTip = false;
>>>>>>> 720a7d910ddbf27ab566359e6f6c7b9887e6effc
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
