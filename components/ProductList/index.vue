<template>
  <div class="product-list-wrapper">
    <div class="filter-wrapper">
      <Filters/>
    </div>
    <div class="grid-wrapper">
      <div class="no-result" v-show="!products.length"> sory, no result for the selections :( </div>
      <Order v-show="products.length" />
      <div class="product-wrapper">
        <Product v-for="item in products" :key="item.id" :data="item"/>
      </div>
      <div class="pagination-wrapper">
        <Pagination/>
      </div>
    </div>
  </div>
</template>

<script>
import Product from '../Product'
import Filters from '../Filters'
import Pagination from '../Pagination'
import Order from '../Order'
import { mapState } from 'vuex'

export default {
  components: {
    Product,
    Filters,
    Pagination,
    Order
  },
  computed: mapState('list', ['products'])
}
</script>

<style lang="css" scoped>
.product-list-wrapper {
  display: flex;
}

.filter-wrapper {
  min-height: 400px;
  flex: 0 0 250px;
}

.grid-wrapper {
  flex: 1;
  padding-left: 10px;
}

.product-wrapper {
  display: grid;
  grid-template-columns:
    minmax(180px, 25%) minmax(180px, 25%) minmax(180px, 25%)
    minmax(180px, 25%);
  grid-gap: 10px;
}

@media (max-width: 850px) {
  .filter-wrapper {
    display: none;
  }
  .grid-wrapper {
    padding: 0;
  }
  .product-wrapper {
    grid-template-columns: minmax(180px, 50%) minmax(180px, 50%);
  }
}

@media (max-width: 1100px) {
  .product-wrapper {
    grid-template-columns: minmax(180px, 33%) minmax(180px, 33%) minmax(
        180px,
        33%
      );
  }
}

.pagination-wrapper {
  grid-area: pagination;
  min-height: 40px;
  margin: 10px 0;
}

.no-result {
  text-align: center;
  padding: 40px 0;
  font-size: 30px;
  opacity: .5;
}
</style>
