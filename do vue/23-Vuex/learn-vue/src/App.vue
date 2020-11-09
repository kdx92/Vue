<template>
  <div id="app">
    <h2>{{ $store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{ $store.getters.fullname }}</h2>
    <h2>{{ $store.getters.fullname2 }}</h2>
    <h2>{{ $store.getters.fullname3 }}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>

    <button @click="updateInfo">修改信息</button>
    <h2>{{ $store.state.info}}</h2>

    <h2>{{ message }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <!-- <h2>{{ more }}</h2> -->
    <h2>{{ $store.getters.more }}</h2>
    <!-- <h2>{{ $store.getters.more.length }}</h2> -->
    <h2>{{ $store.getters.moreLength }}</h2>
    <h2>{{ $store.getters.moreAge(12) }}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <!-- <hello-vue :counter="counter"/> -->
    <hello-vue/>
  </div>
</template>

<script>
import HelloVue from './components/HelloVue'

import {
  INCREMENT
} from './store/mutations-types'
export default {
  name: 'App',
  components: {
    HelloVue
  },
  data() {
    return {
      message: 'biubiubiu',
      // counter: 0
    }
  },
  // computed: {
  //   more() {
  //     // return this.$store.state.students.filter(s => {
  //     // return s.age >=12
  //     // })
  //     return this.$store.state.students.filter(s => s.age >= 12)
  
  //   // 通过filter拿到students中的元素，然后在()中执行函数，此时的函数返回的是一个boolean，
  //   // 当为true的时候，将s加到新的数组中当做返回值
  //   // 当为false时，忽略掉

  // }
  // },
  methods: {
    addition() {
      this.$store.commit(INCREMENT)
    },
    subtraction() {
      this.$store.commit('decrement')
    },
    addCount(count) {

      // payload：负载
      // 1.普通的提交封装
      // this.$store.commit('incrementCount', count)
      // 2.特殊的提交封装
      // mutations中的内容分为两部分，一部分是事件类型，即type

      // 1与2传过去的count是不同的，1传过去的count是一个数字
      // 2传过去的count是一个对象
      this.$store.commit({
        type: 'incrementCount',
        // count: count

        // ES6
        count

      })
    },
    addStudent() {
      const stu = {id: 4, name: 'e', age: 30}
      this.$store.commit('addStudent', stu)
    },
    // updateInfo() {
    //   // this.$store.commit('updateInfo')
    //   this.$store.dispatch('aUpdateInfo', 'payload')
    //   // 为了模拟异步操作
    //   // actions——dispatch
    // }

    // updateInfo() {
      
    //   this.$store.dispatch('aUpdateInfo', () => {
    //     console.log('OVER');
    //     // 当commit后，打印，表示完成
    //   })
      
    // }
    
    // updateInfo() {
      
    //   this.$store.dispatch('aUpdateInfo', {
    //     message: 'WithMessage',
    //     success: () => {
    //       console.log('OVER');
    //     }
    //   })
      
    // }


        updateInfo() {
      
      this.$store
      .dispatch('aUpdateInfo', 'WithMessage')
      .then(res => {
        console.log('success');
        console.log(res);
      })
      
    },
    updateName() {
      this.$store.commit('updateName', 'lisi')
    },
    asyncUpdateName() {
      this.$store.dispatch('aUpdateName')
    }
  }
}
</script>

<style>

</style>
