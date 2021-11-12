export const state = () => ({
  loading: false,
  userEmail: localStorage.getItem('userEmail'),
  breadcrumbs: [],
  snackbar: {
    value: false,
    message: '',
    color: '',
  },
})

export const getters = {
  loading: (state) => state.loading,
  userEmail: (state) => state.userEmail,
  breadcrumbs: (state) => state.breadcrumbs,
  snackbar: (state) => state.snackbar,
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
  setSnackbar(state, payload) {
    state.snackbar = payload
  },
}
export const actions = {
  // async nuxtServerInit({ dispatch }, { $axios }) {},
}
