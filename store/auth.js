//* state
export const state = () => ({
  userToken: localStorage.getItem('token'),
  isLoggedIn: localStorage.getItem('isLoggedIn'),
})
//* getters
export const getters = {
  isLoggedIn: (state) => !!state.isLoggedIn,
  userToken: (state) => state.userToken,
}
//* mutations
export const mutations = {
  setToken(state, payload) {
    state.userToken = payload
  },
  setIsLoggedIn(state, payload) {
    state.isLoggedIn = payload
  },
}
//* actions
export const actions = {
  async login({ commit }, payload) {
    //
    const res = await this.$axios.post('/user/login', {
      email: payload.email,
      password: payload.password,
    })
    const data = await res.data.data
    //
    const rootDirectoryId = data.root_directory_id
    commit('directory/setRootDirectoryId', rootDirectoryId, { root: true })
    //
    const token = data.access_token
    commit('setToken', token)
    localStorage.setItem('token', token)
    //
    commit('setIsLoggedIn', true)
    localStorage.setItem('isLoggedIn', '1')
    //
    commit('setUserEmail', payload.email, { root: true })
  },
  logout({ commit }) {
    commit('setToken', null)
    commit('setIsLoggedIn', false)
    localStorage.removeItem('token')
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('rootDirectoryId')
    // eslint-disable-next-line no-console
    console.log('LOGOUT')
    this.$router.push({ name: 'login' })
  },
}
