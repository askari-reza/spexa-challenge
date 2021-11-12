<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container class="fill-height">
        <Nuxt />
      </v-container>
    </v-main>
   
    <v-footer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    <app-snackbar></app-snackbar>
  
  </v-app>
</template>

<script>
export default {
name: 'AuthLayout',
  data() {
    return {
      title: 'Spexa',
    }
  },
}
</script>
