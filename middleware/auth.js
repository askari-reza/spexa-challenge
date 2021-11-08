/* eslint-disable no-console */
//
export default ({ store, route, redirect }) => {
  const requiresAuth = route.meta.some((record) => record.requiresAuth)
  const requiresGuest = route.meta.some((record) => record.requiresGuest)
  //
  //* AUTHENTICATION IS REQUIRED
  if (requiresAuth && !store.getters['auth/isLoggedIn']) redirect('/login')
  //
  //* REQUIRES GUEST
  if (requiresGuest && store.getters['auth/isLoggedIn'])
    redirect({ name: 'index' })
}
