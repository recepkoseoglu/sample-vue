<template>
  <div>
    <Breadcrumb />
    <ProductList/>
  </div>
</template>

<script>
import ProductList from '../../components/ProductList'
import Breadcrumb from '../../components/Breadcrumb'
export default {
  components: {
    ProductList,
    Breadcrumb
  }
}
</script>
