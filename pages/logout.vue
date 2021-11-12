<template>
  <div class="">Logged Out</div>
</template>
<script>
export default {
  name: 'Logout',
  auth: false,
  layout: 'guest',
  async middleware({ store, redirect, $auth }) {
    await $auth.logout()
    // eslint-disable-next-line no-console
    console.log('Logged Out')

    return redirect({
      name: 'index',
    })
  },
  // async mounted() {
  //   // eslint-disable-next-line no-console
  //   console.log('Logged Out')
  // },
}
</script>

<style></style>
