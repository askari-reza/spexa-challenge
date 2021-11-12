//! this plugin disable the NUxt Error Page
export default function ({ app }) {
  app.nuxt.error = () => {}
}
