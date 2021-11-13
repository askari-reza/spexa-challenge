<template>
  <div>
    <template v-if="!isHome">
      <template v-for="(item, i) in breadcrumbs">
        <v-btn
          :key="i"
          :disabled="item.id === $route.params.id"
          plain
          exact-active-class="none"
          nuxt
          :to="{
            name: 'directory-id',
            params: { id: item.id },
          }"
          text
          @click.capture="setBreadcrumbs(item)"
          v-text="item.title"
        ></v-btn>
        <v-icon :key="item.id" v-text="mdiChevronRight"></v-icon>
      </template>
    </template>
    <div class="d-flex">
      <v-btn v-if="!isHome" icon x-large color="secondary" @click="goBack">
        <v-icon v-text="mdiBackburger"></v-icon>
      </v-btn>
      <h1 class="text-h3 text-uppercase">
        {{ title }}
      </h1>
    </div>
  </div>
</template>

<script>
import { mdiHome, mdiBackburger, mdiChevronRight } from '@mdi/js'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'TheBreadcrumbs',
  data() {
    return {
      mdiHome,
      mdiBackburger,
      mdiChevronRight,
    }
  },

  computed: {
    ...mapGetters({
      breadcrumbs: 'directory/breadcrumbs',
      rootId: 'directory/rootDirectoryId',
    }),
    isHome() {
      return this.rootId === this.$route.params.id
    },
    title() {
      return this.breadcrumbs[this.breadcrumbs.length - 1].title
    },
  },
  methods: {
    ...mapMutations({
      setBreadcrumbs: 'directory/setBreadcrumbs',
      goBack: 'directory/goBack',
    }),
  },
}
</script>

<style lang="scss" scoped>
.v-btn--disabled + .v-icon {
  display: none;
}
</style>
