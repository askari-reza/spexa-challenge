//
export default ({ $axios, app, store, req, redirect, error: nuxtError }) => {
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
    if (resp.config.url === '/user/refresh') {
      // eslint-disable-next-line no-console
      console.log('token refresh')
    }
    // eslint-disable-next-line no-console
    console.log(resp)
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
    // eslint-disable-next-line no-console
    console.log(message)
    //
    if (code === 401) {
      // eslint-disable-next-line no-console
      console.log('onError: 401')
      redirect({ name: 'logout' })
    } else if (message) {
      store.commit('setSnackbar', {
        value: true,
        message,
        color: 'error',
      })
    } else {
      nuxtError(err)
      return Promise.resolve(false)
    }
    //
  })
  //* onRequest(config)
  //* onResponse(response)
  //* onError(err)
  //* onRequestError(err)
  //* onResponseError(err)
}
