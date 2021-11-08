export const state = () => ({
  loading: false,
  userEmail: localStorage.getItem('userEmail'),
})

export const getters = {
  loading: (state) => state.loading,
  userEmail: (state) => state.userEmail,
}
export const mutations = {
  setLoading(state, payload) {
    state.loading = payload
  },
  setUserEmail(state, payload) {
    localStorage.setItem('userEmail', payload)
    state.userEmail = payload
  },
}
export const actions = {
  // async nuxtServerInit({ dispatch }, { $axios }) {},
}
