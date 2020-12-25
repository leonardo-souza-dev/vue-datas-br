import Vue from 'vue'
import App from './App.vue'
//import VueDatasBr from 'vue-datas-br'
import VueDatasBr from '../node_modules/vue-datas-br/index'

Vue.use(VueDatasBr)

new Vue({
  el: '#app',
  render: h => h(App)
})
