<template>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <login-from></login-from>
      </v-col>
    </v-row>
</template>

<script>
export default {
  name: 'Login',
  middleware: 'guest',
}
</script>

<style></style>
