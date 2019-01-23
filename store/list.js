import axios from 'axios'
import queries from '../queries'

const graphql = process.env.GRAPHQL

export const namespaced = true

export const state = () => ({
  products: [],
  productsCount: 0,
  categories: [],
  brands: [],
  breadcrumbs: [],
  valueOfBrand: '',
  routeCategory: {},
  routeBrands: {}
})

export const getters = {
  breadcrumbs: ({ breadcrumbs = [] }) => breadcrumbs.slice(0).reverse(),
  filteredBrands: ({ brands, valueOfBrand }) =>
    brands.filter(i => new RegExp(valueOfBrand, 'gi').test(i.name))
}

export const mutations = {
  initial(state, data) {
    state.products = data.products.result
    state.productsCount = data.products.totalCount
    state.categories = data.categories.result
    state.brands = data.brands.result
    state.breadcrumbs = data.breadcrumb
    state.category = data.category
  },
  setbrandValue(state, valueOfBrand) {
    state.valueOfBrand = valueOfBrand
  }
}

export const actions = {
  async initialFetch({ commit }, route) {
    const { category: categorySlug, brands = '' } = route.params
    const { page = '1', order = 'asc' } = route.query
    const variables = {
      page: parseInt(page),
      order,
      categorySlug,
      hasCategory: !!categorySlug,
      brandSlug: brands.split('-')
    }
    if (!categorySlug) {
      variables.parentCategoryId = 0
    }
    let res = await axios
      .post(graphql, {
        query: queries.list,
        variables
      })
      .then(res => res.data)
    if (!res.data) {
      return
    }
    commit('list/initial', res.data, { root: true })
  }
}
