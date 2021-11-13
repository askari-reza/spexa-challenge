<template>
  <v-container>
    <the-directory-loader v-if="loading"></the-directory-loader>
    <v-row v-else-if="noChild" justify="center">
      <v-col cols="12" sm="6">
        <no-child-directory></no-child-directory>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col
        v-for="directory in directories"
        :key="directory.id"
        cols="6"
        sm="2"
      >
        <div class="d-flex justify-end">
          <v-menu offset-y>
            <template #activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon large v-text="mdiDotsHorizontal"></v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-btn
                  text
                  nuxt
                  :to="{
                    name: 'directory-id',
                    params: {
                      id: directory.id,
                    },
                  }"
                  target="_blank"
                  @click="addToBreadcrumbs(directory)"
                >
                  <v-icon v-text="mdiOpenInNew"></v-icon>
                  open
                </v-btn>
              </v-list-item>
              <v-list-item>
                <directory-delete-dialog
                  :directory-id="directory.id"
                  :directory-title="directory.title"
                ></directory-delete-dialog>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <v-card
          flat
          nuxt
          color="transparent"
          :to="{
            name: 'directory-id',
            params: { id: directory.id },
          }"
          @click="addToBreadcrumbs(directory)"
        >
          <v-icon size="100%" color="secondary" v-text="mdiFolder"></v-icon>
          <div class="text-center" v-text="directory.title"></div>
        </v-card>
      </v-col>
      <v-col cols="2">
        <v-card flat height="100%" color="transparent">
          <v-card-text class="d-flex justify-center align-center fill-height">
            <new-directory-form @form-submit="createDirectory">
            </new-directory-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'
import {
  mdiFolder,
  mdiDotsHorizontal,
  mdiPlusThick,
  mdiOpenInNew,
  mdiTrashCan,
} from '@mdi/js'

export default {
  name: 'TheDirectory',
  props: {
    directoryId: {
      type: String,
      required: true,
      default: '',
    },
  },
  data() {
    return {
      directories: [],
      createDialog: false,
      mdiFolder,
      mdiDotsHorizontal,
      mdiPlusThick,
      mdiOpenInNew,
      mdiTrashCan,
    }
  },
  async fetch() {
    await this.getDirectory(this.directoryId)
  },
  computed: {
    ...mapGetters(['loading']),
    noChild() {
      return this.directories.length === 0
    },
  },
  methods: {
    ...mapActions('directory', ['create', 'get', 'remove']),
    ...mapMutations('directory', ['setBreadcrumbs']),
    async createDirectory(title) {
      await this.create({
        id: this.directoryId,
        title,
      })
      await this.getDirectory(this.directoryId)
    },
    async getDirectory(id) {
      const res = await this.get(id)
      const data = await res.data.data
      this.directories = data.directories
    },
    async removeDirectory(id) {
      await this.remove(id)
      this.getDirectory(this.directoryId)
    },
    openDirectory(directory) {
      this.getDirectory(directory.id)
    },
    addToBreadcrumbs(directory) {
      this.setBreadcrumbs(directory)
    },
  },
}
</script>

<style lang="scss" scoped>
.menu {
  position: relative;
  z-index: 2;
}
</style>
