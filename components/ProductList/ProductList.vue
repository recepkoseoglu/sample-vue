<template>
  <Wrapper>
    <FilterWrapper>
      <Filters/>
    </FilterWrapper>
    <GridWrapper>
      <ProductWrapper>
        <Product v-for="item in products" :key="item.id" :data="item"/>
      </ProductWrapper>
      <PaginationWrapper>
        <Pagination/>
      </PaginationWrapper>
    </GridWrapper>
  </Wrapper>
</template>

<script>
import {
  Wrapper,
  FilterWrapper,
  GridWrapper,
  ProductWrapper,
  PaginationWrapper
} from './styles'
import Product from '../Product'
import Filters from '../Filters'
import Pagination from '../Pagination'
export default {
  components: {
    Wrapper,
    Product,
    Filters,
    Pagination,
    FilterWrapper,
    GridWrapper,
    ProductWrapper,
    PaginationWrapper
  },
  computed: {
    products() {
      return this.$store.state.products.result
    }
  }
}
</script>
