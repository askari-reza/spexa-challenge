<template>
  <v-row>
    <v-col cols="6" sm="2">
      <v-card flat color="transparent">
        <v-card-text>
          <v-skeleton-loader
            height="100"
            type="image"
            class="mb-2"
          ></v-skeleton-loader>
          <v-skeleton-loader
            class="d-flex justify-center"
            type="heading"
          ></v-skeleton-loader>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="2" class="d-flex align-center">
      <v-skeleton-loader
        type="avatar"
        class="d-flex justify-center"
      ></v-skeleton-loader>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'TheDirectoryLoader',
}
</script>

<style></style>
