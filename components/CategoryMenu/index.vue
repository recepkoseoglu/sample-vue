<template>
  <div class="category-menu">
    <a
      v-for="item in categories"
      :key="item.id"
      :href="'/' + item.slug"
    >{{ item.name.replace('&', '\n') }}</a>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState('home', ['categories'])
}
</script>

<style lang="sass" scoped>
.category-menu
  display: flex
  margin-bottom: 10px
  background-color: white
  > a 
    display: block
    text-decoration: none
    color: inherit
    flex: 1
    text-align: center
    align-self: center
    padding: 10px
    cursor: pointer
</style>
