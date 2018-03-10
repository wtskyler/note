<template>
  <div>
    <router-view></router-view>
    <h1>我是App.vue</h1>
    <!-- <h1>{{name}}</h1> -->
    <input
    v-model="state.name"
    type="text">

    <h1>计算属性来获取的name: {{name}}</h1>
    <button @click="change">修改state中的name</button>
  </div>
</template>
<script>
  // Vuex: 不推荐在 store 之外的地方修改state中的数据
  //       如果要修改，一定要在mutaions中修改
  // *****以后，只要是在state中的数据，都通过计算属性来在组件中使用*****
  export default {
    data () {
      return {
        // 下行代码是不推荐的，因为双向数据绑定有可以会直接修改state中的数据
        state: this.$store.state
      }
    },
    methods: {
      change () {
        // 我要调用 store中的mutations 中的方法来修改 state.name
        // commit 方法的参数是mutations中的方法名,
        // 内部会自动调用这个方法changeName(state, arg),
        this.$store.commit('changeName', '小天天')
      }
    },
    computed: {
       name () {
         return this.$store.state.name
       }
    },
    created () {
      // this.$store.state.name = '998'
      console.log(this.$store.state)
    }
  }
</script>