export const state = () => ({
  rootDirectoryId: localStorage.getItem('rootDirectoryId'),
  currentDirectory: '',
  breadcrumbs: [{ title: 'home', id: localStorage.getItem('rootDirectoryId') }],
})

export const getters = {
  rootDirectoryId: (state) => state.rootDirectoryId,
  currentDirectory: (state) => state.currentDirectory,
  breadcrumbs: (state) => state.breadcrumbs,
}
export const mutations = {
  setRootDirectoryId(state, payload) {
    localStorage.setItem('rootDirectoryId', payload)
    state.rootDirectoryId = payload
  },
  setCurrentDirectory(state, payload) {
    state.currentDirectory = payload
  },
  goBack(state) {
    const lastItem = state.breadcrumbs[state.breadcrumbs.length - 1]
    state.breadcrumbs.pop(lastItem)
    this.$router.go(-1)
  },
  setBreadcrumbs(state, payload) {
    //
    const lastItem = state.breadcrumbs[state.breadcrumbs.length - 1]
    if (payload.parent === lastItem.parent) {
      state.breadcrumbs.pop(lastItem)
    }
    //
    else if (state.breadcrumbs.includes(payload)) {
      const lastChildIndex = state.breadcrumbs.findIndex(
        (el) => el.id === payload.id
      )
      state.breadcrumbs.splice(lastChildIndex)
    }
    state.breadcrumbs.push(payload)
  },
}
export const actions = {
  async get(_, payload) {
    const res = await this.$ajax({
      method: 'get',
      url: `/directory/${payload}`,
    })
    return res
  },
  async create(_, payload) {
    const res = await this.$ajax({
      method: 'post',
      url: `/directory/${payload.id}`,
      data: {
        title: payload.title,
      },
    })
    return res
  },
  async remove(_, payload) {
    await this.$ajax({
      method: 'delete',
      url: `/directory/${payload}`,
    })
  },
}
