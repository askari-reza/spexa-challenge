<template>
  <v-container>
    <template v-for="(breadcrumb, i) in breadcrumbs">
      <span :key="i">{{ breadcrumb.title }}</span> /
    </template>
    <the-directory
      :directories="directories"
      @item-click="getDirectory"
      @add-item="openDialog"
    ></the-directory>
    <v-dialog
      v-model="dialog"
      width="500"
      max-width="100%"
      transition="dialog-top-transition"
    >
      <new-directory-form
        @form-submit="createDirectory"
        @cancle="closeDialog"
      ></new-directory-form>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  meta: {
    requiresAuth: true,
  },
  async asyncData({ store }) {
    const rootId = store.getters['directory/rootDirectoryId']
    const res = await store.dispatch('directory/get', rootId)
    const data = await res.data.data
    const directories = data.directories
    return {
      rootId,
      directories,
      currentDirectory: {
        id: rootId,
      },
    }
  },
  data() {
    return {
      dialog: false,

      breadcrumbs: [
        {
          title: 'home',
          id: this.rootId,
        },
      ],
    }
  },
  methods: {
    ...mapActions('directory', ['create', 'get']),
    async createDirectory(title) {
      // eslint-disable-next-line no-console
      // console.log(this.currentDirectory.id, title)
      await this.create({
        id: this.currentDirectory.id,
        title,
      })
      await this.getDirectory(this.currentDirectory)
      this.dialog = false
    },
    setBreadcrumbs(directory) {
      this.breadcrumbs.push(directory)
    },
    async getDirectory(directory) {
      const res = await this.get(directory.id)
      const data = await res.data.data
      this.directories = data.directories
      this.currentDirectory = directory
      this.setBreadcrumbs(directory)
    },
    closeDialog() {
      this.dialog = false
    },
    openDialog() {
      this.dialog = true
    },
  },
}
</script>

<style></style>
