import axios from 'axios'
import queries from '../queries'

export const state = () => ({
  products: []
})

export const mutations = {
  SET_PRODUCTS(state, data) {
    state.products = data
  }
}

export const actions = {
  async GET_PRODUCTS({ commit }) {
    axios
      .post('http://graphql.simplesampleapp.com', {
        query: queries.products,
        veriables: null
      })
      .then(({ data, headers }) => {
        commit('SET_PRODUCTS', data.data.products)
        console.log(headers['x-total-count'])
      })
  }
}
