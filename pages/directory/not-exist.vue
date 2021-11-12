<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <v-card-title class="justify-center secondary--text">
            Opss ...
            <v-icon
              color="secondary"
              class="mx-1"
              v-text="mdiEmoticonConfusedOutline"
            ></v-icon>
          </v-card-title>
          <v-card-text class="text-center body-1 text-capitalize">
            directory not exist
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn x-large color="secondary" nuxt to="/">
              <v-icon v-text="mdiHome"></v-icon>
              back to home
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  mdiEmoticonConfusedOutline,
  mdiFolderAlert,
  mdiFolderHome,
  mdiHome,
} from '@mdi/js'
export default {
  name: 'DirectoryNotExist',
  data() {
    return {
      mdiEmoticonConfusedOutline,
      mdiFolderAlert,
      mdiFolderHome,
      mdiHome,
    }
  },
}
</script>

<style></style>
