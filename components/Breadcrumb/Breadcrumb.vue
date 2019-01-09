<template>
  <wrapper>
    <Item :href="'/'" v-show="breadcrumb.length">Anasayfa</Item>
    <Item v-for="item in breadcrumb" :key="item.slug" :href="'/' + item.slug">{{ item.name }}</Item>
  </wrapper>
</template>

<script>
import { Wrapper, Item } from './styles'
export default {
  components: {
    Wrapper,
    Item
  },
  computed: {
    breadcrumb() {
      const breadcrumb = this.$store.state.breadcrumbs.slice(0)
      return breadcrumb.reverse()
    }
  }
}
</script>
