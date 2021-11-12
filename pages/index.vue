<template>
  <div class="">home</div>
</template>
<script>
export default {
  name: 'Home',
  middleware({ store, redirect }) {
    const rootId = store.getters['directory/rootDirectoryId']
    return redirect({
      name: 'directory-id',
      params: {
        id: rootId,
      },
    })
  },
}
</script>
