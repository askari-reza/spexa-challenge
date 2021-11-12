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
  async asyncData({ $ajax }) {
    // eslint-disable-next-line no-console
   const res = await $ajax({
      method: 'post',
      url: '/user/login',
      data: {
        email:'mail@test.ir',
        password: '123',
      },
    })
    // eslint-disable-next-line no-console
    console.log(res)
  },
}
</script>

<style></style>
