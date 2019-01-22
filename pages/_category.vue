<template>
  <div>
    <Breadcrumb/>
    <ProductList/>
  </div>
</template>

<script>
import ProductList from '../components/ProductList'
import Breadcrumb from '../components/Breadcrumb'

export default {
  components: {
    ProductList,
    Breadcrumb
  },
  head(props) {
    const cateogry = this.$store.state.list.category || {}
    return {
      title: `${cateogry.name} | Nuxt.js E-Commerce Sample`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${cateogry.name} | Nuxt.js E-Commerce Sample Applicaiton`
        }
      ]
    }
  }
}
</script>
