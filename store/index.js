export const state = () => ({
  loading: false,
  userEmail: localStorage.getItem('userEmail'),
  snackbar: {
    value: false,
    message: '',
    color: '',
  },
})

export const getters = {
  loading: (state) => state.loading,
  userEmail: (state) => state.userEmail,
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

  setSnackbar(state, payload) {
    state.snackbar = payload
  },
  clearSnackbar(state) {
    state.snackbar = {
      value: false,
      message: '',
      color: '',
    }
  },
}
export const actions = {
  // async nuxtServerInit({ dispatch }, { $axios }) {},
}
