//  'https://spexa.tk/user/login' \
export default ({ $axios, store, req, redirect, error: nuxtError }) => {
  //* onRequest
  $axios.onRequest((config) => {
    store.dispatch('setLoading', true)
    //
    config.withCredentials = true
    config.headers.Authorization = `Bearer ${store.getters['auth/userToken']}`
  })
  //
  //* onResponse
  $axios.onResponse((resp) => {
    // eslint-disable-next-line no-console
    console.log(resp)
  })
  //
  //* onError
  $axios.onError((err) => {
    const code = parseInt(err.response && err.response.status)
    // eslint-disable-next-line no-console
    console.log('onError', err)
    if (code === 401) {
      store.dispatch('logOut')
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
