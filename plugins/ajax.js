export default ({ $axios, store, redirect }, inject) => {
  //
  //* onRequest
  $axios.onRequest((config) => {
    store.commit('clearSnackbar')
    store.commit('setLoading', true)
  })
  //
  //* onResponse
  $axios.onResponse((resp) => {
    store.commit('setLoading', false)
    //
   
    const message = resp.data.message
    if (message) {
      store.commit('setSnackbar', {
        value: true,
        message,
        color: 'success',
      })
    }
  })
  //
  //* onError
  $axios.onError((err) => {
    store.commit('setLoading', false)
    //
    const code = parseInt(err.response && err.response.status)
    const message = err.response.data.message
    //
    if (code === 401) {
    
      redirect({ name: 'logout' })
    }
    if (code === 404) {
    
      redirect({ name: 'directory-not-exist' })
    } else {
      store.commit('setSnackbar', {
        value: true,
        message,
        color: 'error',
      })
      // nuxtError(message)
      // return Promise.resolve(false)
    }
    //
  })
  //
  //* onRequest(config)
  //* onResponse(response)
  //* onError(err)
  //* onRequestError(err)
  //* onResponseError(err)
  //
  //* // Inject $ajax(payload) in Vue, context and store.
  inject('ajax', (payload = { method: '', url: '', data: null }) =>
    $axios[payload.method](payload.url, payload.data)
  )
  //
}
