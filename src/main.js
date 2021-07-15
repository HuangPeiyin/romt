import Vue from 'vue'
import App from './Main.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
import 'default-passive-events'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
