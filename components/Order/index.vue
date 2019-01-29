<template>
  <div class="sort">
    <a :href="orderLink('asc')" :class="{ active: order === 'asc'}">Increasing</a>
    <a :href="orderLink('desc')" :class="{ active: order === 'desc'}">Decreasing</a>
  </div>
</template>

<script>
import { urlDecoder } from '../../helpers/urlParser'
export default {
  computed: {
    orderLink() {
      return order => urlDecoder({}, { order }, this.$route)
    },
    order() {
      return this.$route.query.order || 'asc'
    }
  }
}
</script>

<style lang="sass" scoped>
.sort
  background-color: white
  display: flex
  margin-bottom: 10px
  > a
    flex: 0 0 25%
    text-decoration: none
    color: inherit
    padding: 10px 0
    margin: 5px 10px
    text-align: center
    background-color: #fafafa
.active 
  background-color: #dcdcdc !important

</style>
