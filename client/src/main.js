import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.prototype.$baseUrl = 'http://localhost:3000'
Vue.prototype.$isLogin = false

new Vue({
  router,
  beforeCreate: function () {
    console.log(this.$baseUrl)
  },
  render: h => h(App)
}).$mount('#app')