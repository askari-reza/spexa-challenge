<template>
  <v-snackbar :value="snackbar.value" :color="snackbar.color">
    {{ snackbar.message }}
  </v-snackbar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AppSnackbar',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['snackbar']),
  },
}
</script>

<style></style>
