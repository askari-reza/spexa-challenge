//
export default ({ $axios, store, req, redirect, error: nuxtError }) => {
  //* onRequest
  $axios.onRequest((config) => {
    store.commit('setLoading', true)
    //
    // config.withCredentials = true
    config.headers.Authorization = `Bearer ${store.getters['auth/userToken']}`
  })
  //
  //* onResponse
  $axios.onResponse((resp) => {
    store.commit('setLoading', false)
    //
    // eslint-disable-next-line no-console
    console.log(resp)
  })
  //
  //* onError
  $axios.onError((err) => {
    store.commit('setLoading', false)
    //
    const code = parseInt(err.response && err.response.status)
    // eslint-disable-next-line no-console
    console.log('onError', err)
    if (code === 401) {
      store.dispatch('auth/logout')
      redirect({ name: 'login' })
    }
    nuxtError(err.response)
    return Promise.resolve(false)
  })
  //* onRequest(config)
  //* onResponse(response)
  //* onError(err)
  //* onRequestError(err)
  //* onResponseError(err)
}
