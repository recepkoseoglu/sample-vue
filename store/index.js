import axios from 'axios'
import queries from '../queries'

export const state = () => ({
  products: {},
  categories: {},
  brands: {},
  breadcrumbs: []
})

export const mutations = {
  SET_PRODUCTS(state, data) {
    state.products = data.products
    state.categories = data.categories
    state.brands = data.brands
    state.breadcrumbs = data.breadcrumb
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { route }) {
    const categorySlug = route.params.category
    const { page = '1' } = route.query
    const variables = {
      page: parseInt(page),
      parentCategoryId: 0
    }
    if (categorySlug) {
      let res = await axios.post('http://graphql.simplesampleapp.com', {
        query: queries.categories,
        variables: {
          slug: categorySlug
        }
      })
      variables.categoryId = res.data.data.categories.result[0].id
      variables.parentCategoryId = variables.categoryId
    }

    let res = await axios.post('http://graphql.simplesampleapp.com', {
      query: queries.productList,
      variables
    })
    commit('SET_PRODUCTS', res.data.data)
  }
}
