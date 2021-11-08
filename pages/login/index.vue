<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <login-from @form-submit="submit"></login-from>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  //  mapGetters,
  mapActions,
} from 'vuex'
export default {
  name: 'Login',
  layout: 'auth',
  meta: {
    requiresGuest: true,
  },
  computed: {
  },
  methods: {
    ...mapActions('auth', ['login']),
    async submit(user) {
      await this.login(user)
      this.$router.push({ name: 'index' })
    },
  },
}
</script>

<style></style>
