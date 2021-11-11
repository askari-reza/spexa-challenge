export const state = () => ({
  loading: false,
  userEmail: localStorage.getItem('userEmail'),
  breadcrumbs: [],
})

export const getters = {
  loading: (state) => state.loading,
  userEmail: (state) => state.userEmail,
  breadcrumbs: (state) => state.breadcrumbs,
}
export const mutations = {
  setLoading(state, payload) {
    state.loading = payload
  },
  setUserEmail(state, payload) {
    localStorage.setItem('userEmail', payload)
    state.userEmail = payload
  },
  setBreadcrumbs(state, payload) {
    state.breadcrumbs.push(payload)
  },
}
export const actions = {
  // async nuxtServerInit({ dispatch }, { $axios }) {},
}
