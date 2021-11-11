<script>
export default {
  name: 'Home',
  meta: {
    requiresAuth: true,
  },
  middleware({ store, redirect }) {
    const rootId = store.getters['directory/rootDirectoryId']
    return redirect({
      name: 'directory-id',
      params: {
        id: rootId,
        title: 'home',
      },
    })
  },
}
</script>
