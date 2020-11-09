export default {
  
    // context相当于state，但是操作时还是需要经过mutations，
    // aUpdateInfo(context) {
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //   })
    // }

    // aUpdateInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     console.log(payload);
    //   }, 1000)
    // }

    // aUpdateInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     payload()
    //   }, 1000)
    // }


    // aUpdateInfo(context, payload) {
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     console.log(payload.message);
    //     payload.success()
    //   }, 1000)
    // }

// dispatch可以返回一个Promise
    aUpdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo');
          console.log(payload);
          resolve('111111')
          
        }, 1000)
      })
    }
  
}