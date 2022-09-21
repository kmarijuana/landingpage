import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      serviceUrl : `${window.location.origin == 'http://localhost:8080'?`http://localhost/api/`:`https://production.com/api/`}`,
      isLogin:null
    }
    
  },
  getters: {
    serviceUrl(state) {
      // console.log(state)
      return state.serviceUrl
    },
    isLogin(state) {
      // console.log(state)
      return state.isLogin
    },
  },
  mutations: {
    serviceUrl(state, data) {
      // console.log(state)
      return state.serviceUrl = data
    },
    isLogin(state, data) {
      // console.log(state)
      return state.isLogin = data
    },
  },
  actions: {
  },
  modules: {
  }
})
