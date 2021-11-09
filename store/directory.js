export const state = () => ({
  rootDirectoryId: localStorage.getItem('rootDirectoryId'),
})

export const getters = {
  rootDirectoryId: (state) => state.rootDirectoryId,
}
export const mutations = {
  setRootDirectoryId(state, payload) {
    localStorage.setItem('rootDirectoryId', payload)
    state.rootDirectoryId = payload
  },
}
export const actions = {
  async get(_, payload) {
    const res = await this.$axios.get(`/directory/${payload}`)
    return res
  },
  async create(_, payload) {
    const res = await this.$axios.post(`/directory/${payload.id}`, {
      title: payload.title,
    })
    return res
  },
}
