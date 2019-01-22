export const actions = {
  async nuxtServerInit({ dispatch }, { route }) {
    let store
    switch (route.name) {
      case 'category':
      case 'brands-category':
        store = 'list'
        break
      case 'index':
        store = 'home'
        break
      default:
        store = 'home'
        break
    }

    await dispatch(`${store}/initialFetch`, route)
  }
}
