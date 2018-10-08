import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios-auth'
import axiosDefault from 'axios'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser: (state, userData) => {
      state.idToken = userData.idToken
      state.userId = userData.userId
    },
    storeUser: (state, userData) => {
      state.user = userData.user
    }
  },
  actions: {
    registro: ({commit, dispatch}, registroData) => {
      axios.post('/signupNewUser?key=AIzaSyBPIxNCxryWJ-IHJuc-ZvmrEhHRFHCBFgs', {
        email: registroData.email,
        password: registroData.senha,
        returnSecureToken: true
      })
        .then(response => {
          commit('authUser', {
            idToken: response.data.idToken,
            userId: response.data.userId
          })
          router.push('/login')
          dispatch('storeUser', registroData)
        })
        .catch(error => {
          console.log(error)
        })
    },
    login: ({commit, dispatch}, loginData) => {
      axios.post('/verifyPassword?key=AIzaSyBPIxNCxryWJ-IHJuc-ZvmrEhHRFHCBFgs', {
        email: loginData.email,
        password: loginData.senha,
        returnSecureToken: true
      })
        .then(response => {
          commit('authUser', {
            idToken: response.data.idToken,
            userId: response.data.userId
          })
          router.push('/dashboard')
        })
        .catch(error => {
          console.log(error)
        })
    },
    storeUser: ({commit, state}, userData) => {
      if (!state.idToken) return
      axiosDefault.post('/users.json?auth=' + state.idToken, userData)
        .then(response => {
          commit('storeUser', {
            userData: response.data
          })
        })
    },
    logout: ({commit, dispatch}) => {
      commit('authUser', {
        userId: null,
        idToken: null
      })
      router.push('/login')
    }
  },
  getters: {
    isAuthenticated: (state) => {
      return state.idToken !== null
    }
  }
})
