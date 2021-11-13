<script>
export default {
  name: 'Home',
  middleware({ store, redirect }) {
    //
    if (!store.state.auth.loggedIn) {
      return redirect('/login')
    }
    //
    else if (store.state.auth.loggedIn) {
      const rootId = store.getters['directory/rootDirectoryId']
      //
      // store.commit('directory/setBreadcrumbs', {
      //   title: 'home',
      //   id: rootId,
      // })
      //
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
