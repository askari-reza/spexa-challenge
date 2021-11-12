<template>
  <v-card flat>
    <v-card-text class="text-center">
      <v-icon size="200" v-text="mdiFolderPlus"></v-icon>
       </v-card-text>
    <v-card-title class="justify-center">
      There is nothing to show
    </v-card-title>
    <v-card-actions class="d-block">
      <new-directory-form @form-submit="createDirectory">
        <template #activator>
          <v-btn block color="secondary">create directory</v-btn>
        </template>
      </new-directory-form>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import { mdiFolderPlus } from "@mdi/js";
export default {
  name: 'NoChildDirectory',
  data(){
    return{
      mdiFolderPlus
    }
  },
  methods: {
    ...mapActions('directory', ['create']),
    async createDirectory(title) {
      await this.create({
        id: this.$route.params.id,
        title,
      })
      this.$nuxt.refresh()
    },
  },
}
</script>

<style></style>
