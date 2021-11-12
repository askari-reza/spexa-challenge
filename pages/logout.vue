<script>
export default {
  name: 'Logout',
  async middleware({ redirect, $auth }) {
    await $auth.logout()
    return redirect('/')
  },
}
</script>

<style></style>
