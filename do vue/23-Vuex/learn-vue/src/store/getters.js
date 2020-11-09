export default {

    powerCounter(state) {
      return state.counter * state.counter
    },
    more(state) {
      return state.students.filter(s => s.age > 9)
    },
    moreLength(state, getters) {
      // return state.students.filter(s => s.age > 9).length
      return getters.more.length
    },
    moreAge(state) {
      // return function (age) {
      //   return state.students.filter(s => s.age > age)
      // }
     
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }


}