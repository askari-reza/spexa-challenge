<template>
  <v-container>
    <v-row v-if="noChild" justify="center">
      <v-col cols="12" sm="6">
        <no-child-directory @create-directory="add"></no-child-directory>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col v-for="directory in directories" :key="directory.id" cols="2">
        <v-card hover @click="itemClick(directory)">
          <div class="d-flex justify-end">
            <v-menu offset-y>
              <template #activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon large v-text="mdiDotsHorizontal"></v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item> 1 </v-list-item>
              </v-list>
            </v-menu>
          </div>
          <v-icon size="100%" color="secondary" v-text="mdiFolder"></v-icon>
          <div class="text-center" v-text="directory.title"></div>
        </v-card>
      </v-col>
      <v-col cols="2">
        <v-card height="100%" @click="add">
          <v-card-text class="d-flex justify-center align-center fill-height">
            <v-icon size="70%" color="secondary" v-text="mdiPlusThick"></v-icon>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

import { mdiFolder, mdiDotsHorizontal, mdiPlusThick } from '@mdi/js'
export default {
  name: 'TheDirectory',
  props: {
    directories: {
      type: Array,
      requierd: true,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      mdiFolder,
      mdiDotsHorizontal,
      mdiPlusThick,
    }
  },
  computed: {
    noChild() {
      return this.directories.length === 0
    },
  },
  methods: {
    ...mapActions('directory', ['create', 'get']),
    itemClick(directory) {
      this.$emit('item-click', directory)
    },
    add() {
      this.$emit('add-item')
    },
  },
}
</script>

<style lang="scss" scoped>
.menu {
  position: relative;
  z-index: 2;
}
@keyframes change-width {
  0% {
    width: 0;
  }
  25% {
    width: 25%;
  }
  50% {
    width: 50%;
  }
  75% {
    width: 75%;
  }
  100% {
    width: 100%;
  }
}

.dir-icon:hover::after {
  content: '';
  display: block;
  border-bottom: 1px solid var(--v-secondary-base);
  animation: change-width 0.3s ease-in-out forwards;
}
</style>
