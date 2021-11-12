<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <login-from></login-from>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Login',
  layout: 'auth',
  middleware: ['guest'],
}
</script>

<style></style>
