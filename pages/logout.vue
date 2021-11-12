<template>
  <div class="">Logged Out</div>
</template>
<script>
export default {
  name: 'Logout',
  layout: 'guest',
  // middleware: 'guest',
  async middleware({ redirect, $auth }) {
    await $auth.logout()
    return redirect('/')
  },
}
</script>

<style></style>
