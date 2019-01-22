<template>
  <div class="breadcrumb">
    <a :href="'/'" v-show="breadcrumbs.length">Anasayfa</a>
    <a v-for="item in breadcrumbs" :key="item.slug" :href="'/' + item.slug">{{ item.name }}</a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters('list', ['breadcrumbs'])
}
</script>

<style lang="sass" scoped>
.breadcrumb 
  padding: 0 0 10px 0
  > a
    display: inline-block
    margin: 0 10px
    text-decoration: none
    color: inherit
    position: relative
    &:first-of-type
      margin-left: 0px
    &:last-of-type::after
      display: none
    &::after
      position: absolute
      content: '>'
      top: 0
      right: -15px
</style>
