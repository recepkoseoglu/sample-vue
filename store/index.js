import axios from 'axios'
import queries from '../queries'

const graphql = process.env.GRAPHQL

export const state = () => ({
  products: {},
  categories: {},
  brands: {},
  breadcrumbs: [],
  brandName: '',
  filteredBrands: []
})

export const mutations = {
  SET_INDEX_DATA(state, data) {
    state.products = data.products
    state.categories = data.categories
    state.brands = data.brands
    state.filteredBrands = data.brands.result
    state.breadcrumbs = data.breadcrumb || []
  },
  SET_BRAND_DATA(state, data) {
    state.brandName = data.brandName
    state.filteredBrands = data.filteredBrands
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { route }) {
    const { category: categorySlug, brands = '' } = route.params
    const { page = '1' } = route.query
    const variables = {
      page: parseInt(page),
      categorySlug,
      hasCategory: !!categorySlug,
      brandSlug: brands.split('-')
    }
    if (!categorySlug) {
      variables.parentCategoryId = 0
    }
    let res = await axios.post(graphql, {
      query: queries.productList,
      variables
    })
    commit('SET_INDEX_DATA', res.data.data)
  },
  SET_BRAND_NAME({ state, commit }, brandName) {
    const reqex = new RegExp(brandName, 'gi')
    const filteredBrands = state.brands.result.filter(i => reqex.test(i.name))
    commit('SET_BRAND_DATA', { brandName, filteredBrands })
  }
}
