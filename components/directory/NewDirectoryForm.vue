<template>
  <div>
    <v-card flat @click="open">
      <slot name="activator">
        <v-icon size="100%" color="secondary" v-text="mdiPlusThick"></v-icon>
      </slot>
    </v-card>
    <v-dialog
      v-model="dialog"
      width="500"
      max-width="100%"
      transition="dialog-top-transition"
    >
      <v-form @submit.prevent="submit">
        <v-card>
          <v-card-title class="text-uppercase">create directory</v-card-title>
          <v-card-text>
            <v-text-field
              v-model="title"
              :rules="[rules.required]"
              outlined
              label="title"
            ></v-text-field>
          </v-card-text>
          <v-card-actions class="justify-space-around">
            <v-btn outlined @click="close">cancle</v-btn>
            <v-btn type="submit" color="secondary">create</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </div>
</template>

<script>
import { mdiPlusThick } from '@mdi/js'
export default {
  name: 'NewDirectoryForm',
  data() {
    return {
      dialog: false,
      title: '',
      rules: {
        required: (value) => !!value || 'Required.',
      },
      mdiPlusThick,
    }
  },

  methods: {
    submit() {
      this.$emit('form-submit', this.title)
      this.dialog = false
    },
    close() {
      this.dialog = false
    },
    open() {
      this.dialog = true
    },
  },
}
</script>

<style></style>
