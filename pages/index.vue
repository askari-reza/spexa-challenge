<script>
export default {
  name: 'Home',
  middleware({ store, redirect }) {
    const rootId = store.getters['directory/rootDirectoryId']
    if (!store.state.auth.loggedIn) {
      return redirect('/login')
    } else if (store.state.auth.loggedIn) {
      return redirect({
        name: 'directory-id',
        params: {
          id: rootId,
        },
      })
    }
  },
}
</script>
