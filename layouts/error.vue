<template>
  <v-app dark>
    <h1>
      {{ error.message }}
    </h1>
    <v-btn @click="$router.go(0)">try again</v-btn>
  </v-app>
</template>

<script>
export default {
  layout: 'guest',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
