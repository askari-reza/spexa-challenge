<template>
  <v-container>
    <the-breadcrumbs></the-breadcrumbs>
    <the-directory :directory-id="id"></the-directory>
  </v-container>
</template>

<script>
export default {
  name: 'DirectoryId',
  meta: {
    requiresAuth: true,
  },
  asyncData({ store, params, route }) {
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
