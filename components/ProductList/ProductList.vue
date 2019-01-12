<template>
  <div class="ProductListWrapper">
    <div class="FilterWrapper">
      <Filters/>
    </div>
    <div class="GridWrapper">
      <div class="ProductWrapper">
        <Product v-for="item in products" :key="item.id" :data="item"/>
      </div>
      <div class="PaginationWrapper">
        <Pagination/>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '../Product'
import Filters from '../Filters'
import Pagination from '../Pagination'
export default {
  components: {
    Product,
    Filters,
    Pagination
  },
  computed: {
    products() {
      return this.$store.state.products.result
    }
  }
}
</script>

<style lang="sass" scoped>
.ProductListWrapper
  display: flex;

.FilterWrapper
  min-height: 400px;
  flex: 0 0 250px;
  @media (max-width: 850px)
    display: none;

.GridWrapper
  flex: 1;
  padding: 0 10px;
  @media (max-width: 850px)
    padding: 0;

.ProductWrapper
  display: grid;
  grid-template-columns: minmax(180px, 25%) minmax(180px, 25%) minmax(180px, 25%) minmax(180px, 25%);
  grid-gap: 10px;
  @media (max-width: 1100px)
    grid-template-columns: minmax(180px, 33%) minmax(180px, 33%) minmax(180px, 33%);
  @media (max-width: 850px)
    grid-template-columns: minmax(180px, 50%) minmax(180px, 50%);

.PaginationWrapper
  grid-area: pagination;
  min-height: 40px;
  margin: 10px 0;

</style>
