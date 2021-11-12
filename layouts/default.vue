<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-btn outlined @click="logout">Logout</v-btn>
      <v-toolbar-title class="mx-2" v-text="userEmail"></v-toolbar-title>
      <v-spacer></v-spacer>
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
  computed: {
    ...mapGetters(['userEmail']),
  },
  methods: {
    ...mapActions('auth', ['logout']),
   async logout() {
      //
      // this.$auth.strategy.token.reset()
      // this.$auth.strategy.refreshToken.reset()
      // localStorage.clear()
      //
      // this.$router.push({ name: 'logout' })
      await this.$auth.logout();
 
    },
  },
}
</script>
