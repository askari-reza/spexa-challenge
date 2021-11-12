<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      <template v-if="$auth.loggedIn">
        <v-btn outlined @click="logout">Logout</v-btn>
        <span class="subtitle-1 mx-2" v-text="userEmail"></span>
      </template>
      {{ $auth.loggedIn }}
    </v-app-bar>
    <v-main>
      <v-container>
        <div v-if="$nuxt.isOffline">You are offline</div>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    <app-snackbar></app-snackbar>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'DefaultLayout',
  data() {
    return {
      title: 'Spexa',
    }
  },
  computed: {
    ...mapGetters(['userEmail']),
  },
  methods: {
    ...mapActions('auth', ['logout']),
    async logout() {
      await this.$auth.logout()
      this.$router.push({ name: 'login' })
    },
  },
}
</script>
