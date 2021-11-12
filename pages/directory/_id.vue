<template>
  <v-container>
    <the-breadcrumbs></the-breadcrumbs>
    <the-directory :directory-id="id"></the-directory>
  </v-container>
</template>

<script>
export default {
  name: 'DirectoryId',
  middleware: [
    'auth',
    ({ params, store }) => {
      store.commit('directory/setCurrentDirectory', params.id)
    },
  ],
  asyncData({ params, store }) {
    store.dispatch('directory/setCurrentDirectory', params.id)
    return {
      id: params.id,
    }
  },

  data() {
    return {}
  },
  methods: {},
}
</script>

<style></style>
