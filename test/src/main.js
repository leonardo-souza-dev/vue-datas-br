import Vue from 'vue'
import App from './App.vue'
import VueDatasBr from 'vue-datas-br'

Vue.use(VueDatasBr)

new Vue({
  el: '#app',
  render: h => h(App)
})
