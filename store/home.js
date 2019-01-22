import axios from 'axios'
import queries from '../queries'

const graphql = process.env.GRAPHQL

export const namespaced = true

export const state = () => ({
  sliderIndex: 0,
  promo: [],
  products: [],
  categories: []
})

export const mutations = {
  initial(state, data) {
    state.promo = data.kinds.result
    state.products = data.products.result
    state.products = data.products.result
    state.categories = data.categories.result
  },
  setSliderIndex(state, index) {
    state.sliderIndex = index
  }
}

export const actions = {
  async initialFetch({ commit }) {
    let res = await axios.post(graphql, {
      query: queries.home,
      variables: null
    })
    commit('home/initial', res.data.data, { root: true })
  }
}
