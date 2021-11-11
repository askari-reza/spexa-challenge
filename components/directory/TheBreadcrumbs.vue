<template>
  <div class="">
    <v-btn icon color="secondary" to="/">
      <v-icon v-text="mdiHome"></v-icon>
    </v-btn>
    <v-btn icon color="secondary" @click="$router.go(-1)">
      <v-icon v-text="mdiBackburger"></v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mdiHome, mdiBackburger } from '@mdi/js'
export default {
  name: 'TheBreadcrumbs',
  data() {
    return {
      mdiHome,
      mdiBackburger,
    }
  },

  methods: {},
}
</script>

<style></style>
