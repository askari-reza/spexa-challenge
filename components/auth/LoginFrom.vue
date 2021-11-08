<template>
  <v-form @submit.prevent="submit">
    <v-card>
      <v-card-title class="justify-center">{{ title }}</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="user.email"
          :rules="[rules.required, rules.email]"
          outlined
          clearable
          label="email"
        ></v-text-field>
        <v-text-field
          v-model="user.password"
          :rules="[rules.required]"
          :type="passwordField"
          outlined
          label="password"
          :append-icon="passwordIcon"
          @click:append="showPassword"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn dark type="submit" :loading="loading" block
          >Register / Login</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
import { mapGetters } from 'vuex'
import { mdiEyeOff, mdiEye } from '@mdi/js'
export default {
  name: 'LoginForm',
  data() {
    return {
      title: 'Try the product out fo free',
      user: {
        email: '',
        password: '',
      },
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
      passwordVisable: false,
    }
  },
  computed: {
    ...mapGetters(['loading']),
    passwordIcon() {
      if (!this.user.password) {
        return ''
      } else return this.passwordVisable ? mdiEye : mdiEyeOff
    },
    passwordField() {
      return this.passwordVisable ? 'text' : 'password'
    },
  },
  methods: {
    submit() {
      this.$emit('form-submit', this.user)
    },
    showPassword() {
      this.passwordVisable = !this.passwordVisable
    },
  },
}
</script>

<style></style>
