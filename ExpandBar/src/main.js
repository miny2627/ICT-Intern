import Vue from 'vue'
import App from './App.vue'

import './assets/css/icon-bigzami.css'
import './assets/css/bootstrap-4.3.1.css'
import './assets/css/style.css'
import './assets/css/layout.css'


Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
