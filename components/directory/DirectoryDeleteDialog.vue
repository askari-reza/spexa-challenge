<template>
  <v-dialog
    v-model="dialog"
    width="300"
    max-width="100%"
    transition="dialog-top-transition"
  >
    <template #activator="{ on, attrs }">
      <v-btn text v-bind="attrs" v-on="on">
        <v-icon v-text="mdiTrashCan"></v-icon>
        delete
      </v-btn>
    </template>
    <v-card flat>
      <v-card-title class="justify-center text-capitalize">
        delete directory
      </v-card-title>
      <v-card-text>
        Are you sure want delete
        <span class="font-weight-bold">{{ directoryTitle }}</span> directory?
      </v-card-text>
      <v-card-actions class="justify-space-around">
        <v-btn color="secondary" outlined @click="close">cancel</v-btn>
        <v-btn color="secondary" @click="removeDirectory">
          <v-icon v-text="mdiTrashCan"></v-icon>
          delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'

import { mdiTrashCan } from '@mdi/js'
export default {
  name: 'DirectoryDeleteDialog',
  props: {
    directoryId: {
      type: String,
      required: true,
      default: '',
    },
    directoryTitle: {
      type: String,
      required: true,
      default: '',
    },
  },
  data() {
    return {
      mdiTrashCan,
      dialog: false,
    }
  },
  methods: {
    ...mapActions('directory', ['remove']),
    async removeDirectory() {
      await this.remove(this.directoryId)
      this.$nuxt.refresh(this.$route.params.id)
    },
    close() {
      this.dialog = false
    },
  },
}
</script>

<style></style>
