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

<style lang="css" scoped>
.ProductListWrapper {
  display: flex;
}

.FilterWrapper {
  min-height: 400px;
  flex: 0 0 250px;
}

.GridWrapper {
  flex: 1;
  padding: 0 10px;
}

.ProductWrapper {
  display: grid;
  grid-template-columns:
    minmax(180px, 25%) minmax(180px, 25%) minmax(180px, 25%)
    minmax(180px, 25%);
  grid-gap: 10px;
}

@media (max-width: 850px) {
  .FilterWrapper {
    display: none;
  }
  .GridWrapper {
    padding: 0;
  }
  .ProductWrapper {
    grid-template-columns: minmax(180px, 50%) minmax(180px, 50%);
  }
}

@media (max-width: 1100px) {
  .ProductWrapper {
    grid-template-columns: minmax(180px, 33%) minmax(180px, 33%) minmax(
        180px,
        33%
      );
  }
}

.PaginationWrapper {
  grid-area: pagination;
  min-height: 40px;
  margin: 10px 0;
}
</style>
