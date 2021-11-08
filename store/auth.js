//* state
export const state = () => ({
  userToken: localStorage.getItem('token'),
  isLoggedIn: localStorage.getItem('isLoggedIn'),
  userEmail: null,
})
//* getters
export const getters = {
  isLoggedIn: (state) => !!state.isLoggedIn,
  userToken: (state) => state.userToken,
  userMobile: (state) => state.userMobile,
}
//* mutations
export const mutations = {
  setUserMobile(state, payload) {
    state.userMobile = payload
  },
  setToken(state, payload) {
    state.userToken = payload
  },
  setIsLoggedIn(state, payload) {
    state.isLoggedIn = payload
  },

}
//* actions
export const actions =  {
  async sendCode({ commit }, payload) {
    // commit('setUserMobile', payload)
    // await this.$axios.post(API.sendCode.path, {
    //   mobile: payload,
    // })
  },
  async login({ getters, commit, dispatch }, payload) {
    //
    // const res = await this.$axios.post(API.login.path, {
    //   mobile: getters.userMobile,
    //   code: payload,
    // })
    // const token = await res.data.data.access_token
    // commit('setToken', token)
    // localStorage.setItem('token', token)
    // commit('setIsLoggedIn', true)
    // localStorage.setItem('isLoggedIn', '1')
 
  },
  logOut({ commit }) {
    commit('setToken', null)
    commit('setIsLoggedIn', false)
    localStorage.removeItem('token')
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('profile')
    // eslint-disable-next-line no-console
    console.log('LOGOUT')
    this.$router.push('/')
  },

}

