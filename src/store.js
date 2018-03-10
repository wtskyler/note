/**
 * Vuex的相关代码写在这个文件中
 */
// 1.引入Vue 和Vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 2. 创建Store的实例对象, Store就是一个仓库，包含了数据和修改数据的方法
const store = new Vuex.Store({
  // 相当于组件中的data
  // 只不过这个state中的数据所有组件都可以使用
  state: {
    name: '我是小明',
    age: 18,
    todos: [1,2,3,4]
  },
  // 相当于组件中的methods
  // 专门用来修改state中的数据
  // **约定: state中的数据都使用mutations中的方法来修改**
  mutations: {
    // 自定义的changeName方法
    // 这里自定义的方法至少会有一个参数state
    changeName: function (state, arg) {
      state.name = arg
    }
  }
})

// 3. 暴露这个store 实例，并在 index.js 中的 new Vue中启用
// module.exports = store
export default store
// store.state.name 