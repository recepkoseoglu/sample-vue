<template>
  <div>
    <CategoryMenu/>
    <Promo/>
    <ProductCabinet/>
  </div>
</template>

<script>
import Promo from '../components/Promo'
import ProductCabinet from '../components/ProductCabinet'
import CategoryMenu from '../components/CategoryMenu'
export default {
  components: {
    Promo,
    ProductCabinet,
    CategoryMenu
  },
  head() {
    return {
      title: 'Nuxt.js E-Commerce Sample',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxtjs E-Commerce Sample Applicaiton'
        }
      ]
    }
  }
}
</script>
