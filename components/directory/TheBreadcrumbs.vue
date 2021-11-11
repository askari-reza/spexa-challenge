<template>
  <div>
    <template v-if="!isHome">
      <v-btn icon color="secondary" nuxt to="/">
        <v-icon v-text="mdiHome"></v-icon>
      </v-btn>
      <v-btn icon color="secondary" @click="$router.go(-1)">
        <v-icon v-text="mdiBackburger"></v-icon>
      </v-btn>
    </template>
    <v-btn v-else icon color="secondary" @click.prevent>
      <v-icon v-text="mdiHome"></v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mdiHome, mdiBackburger } from '@mdi/js'
import { mapGetters } from 'vuex'
export default {
  name: 'TheBreadcrumbs',
  data() {
    return {
      mdiHome,
      mdiBackburger,
    }
  },
  computed: {
    // rootDirectoryId
    ...mapGetters({
      rootId: 'directory/rootDirectoryId',
    }),
    isHome() {
      return this.rootId === this.$route.params.id
    },
  },
  methods: {},
}
</script>

<style></style>
