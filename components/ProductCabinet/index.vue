<template>
  <div class="cabinet">
    <Product v-for="item in products" :key="item.id" :data="item"/>
  </div>
</template>

<script>
import Product from '../Product'
import { mapState } from 'vuex'
export default {
  components: {
    Product
  },
  computed: mapState('home', ['products'])
}
</script>


<style lang="sass" scoped>
.cabinet
  display: grid
  margin: 10px 0
  grid-gap: 10px
  grid-template-columns: auto auto auto auto 

@media(max-width: 768px)
  .cabinet
    grid-template-columns: auto auto auto

@media(max-width: 576px)
  .cabinet
    grid-template-columns: auto auto
</style>
