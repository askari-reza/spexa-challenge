<template>
  <v-app dark>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <v-card-title class="justify-center secondary--text">
            Opss ... <v-icon v-text="mdiEmoticonConfusedOutline"></v-icon>
          </v-card-title>
          <v-card-text class="text-center body-1">
            {{ error.message }}
          </v-card-text>
          <v-card-actions class="justify-space-around">
            <v-btn x-large outlined color="secondary" @click="$router.go(0)">
              <v-icon v-text="mdiRefresh"></v-icon>
              try again
            </v-btn>
            <v-btn x-large color="secondary" nuxt to="/">
              <v-icon v-text="mdiHome"></v-icon>
              home
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <h1></h1>
  </v-app>
</template>

<script>
import { mdiEmoticonConfusedOutline, mdiHome, mdiRefresh } from '@mdi/js'
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
      mdiEmoticonConfusedOutline,
      mdiHome,
      mdiRefresh,
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
