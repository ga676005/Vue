import Vue from 'vue'
import App from './App.vue'
import './bus.js'
//匯入EventBus

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
