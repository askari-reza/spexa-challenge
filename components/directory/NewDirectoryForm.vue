<template>

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
          <v-btn outlined @click="cancle">cancle</v-btn>
          <v-btn type="submit" color="secondary">create</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>

</template>

<script>
export default {
  name: 'NewDirectoryForm',
 
  data() {
    return {
      title: '',
      rules: {
        required: (value) => !!value || 'Required.',
      },
    }
  },
  methods: {
    submit() {
      this.$emit('form-submit', this.title)
    },
    cancle() {
      this.$emit('cancle')
    },
  },
}
</script>

<style></style>
