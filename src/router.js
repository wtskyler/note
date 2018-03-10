// 1. 引入vue和vue-router引入
import Vue from 'vue'
import VueRouter from 'vue-router'
// 给每个路由规则中的组件实例(this)添加两个属性
// (this.$router)
// (this.$route)
Vue.use(VueRouter) 

// 配置规则
const router = new VueRouter({
  routes: []
})

export default router