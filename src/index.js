import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'

const vm = new Vue({
  el: '#box',
  router:router,
  store: store, // 给所有组件的实例添加一个属性 this.$store = store
  render: function (handler) {
    return handler(App)
  }
})