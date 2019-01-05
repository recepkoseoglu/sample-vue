<template>
  <ProductGrid>
    <Product v-for="item in products" :key="item.id" :data="item"/>
  </ProductGrid>
</template>

<script>
import Product from '../components/Product'
import ProductGrid from '../components/ProductGrid'
export default {
  components: {
    Product,
    ProductGrid
  },
  computed: {
    products() {
      return this.$store.state.products.result
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('GET_PRODUCTS')
  }
}
</script>
