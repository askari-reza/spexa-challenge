<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" md="4">
        <new-directory-form @form-submit="createDir"></new-directory-form>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="3" sm="2" >
        <the-directory></the-directory>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Test',

  asyncData({ store }) {
    const rootId = store.getters['directory/rootDirectoryId']
    // const res = await store.dispatch('directory/get', rootID)
    // const data = await res.data.data
    // eslint-disable-next-line no-console
    // console.log(data)
    return { rootId }
  },
  methods: {
    ...mapActions('directory', ['create']),
    createDir(title) {
      this.create({
        id: this.rootId,
        title,
      })
    },
  },
}
</script>

<style></style>
