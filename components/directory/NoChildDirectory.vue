<template>
  <v-card>
    <v-card-text> </v-card-text>
    <v-card-title></v-card-title>
    <v-card-actions>
      <v-btn block color="secondary" @click="create">create directory</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'NoChildDirectory',
  methods: {
    create() {
      this.$emit('create-directory')
    },
  },
}
</script>

<style></style>
