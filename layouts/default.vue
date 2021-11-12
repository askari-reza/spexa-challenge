<template>
  <v-app dark>
    <v-app-bar v-if="$auth.loggedIn" fixed app flat>
     <v-btn outlined @click="logout">Logout</v-btn>
      <span class="subtitle-1 mx-2" v-text="userEmail"></span>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main class="grey lighten-2">
      <div v-if="$nuxt.isOffline">You are offline</div>
      <nuxt></nuxt>
    </v-main>

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
