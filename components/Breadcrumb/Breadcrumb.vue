<template>
  <div class="Breadcrumb">
    <a :href="'/'" v-show="breadcrumb.length">Anasayfa</a>
    <a v-for="item in breadcrumb" :key="item.slug" :href="'/' + item.slug">{{ item.name }}</a>
  </div>
</template>

<script>
export default {
  computed: {
    breadcrumb() {
      const breadcrumb = this.$store.state.breadcrumbs.slice(0)
      return breadcrumb.reverse()
    }
  }
}
</script>

<style lang="sass" scoped>
.Breadcrumb
  padding: 0 0 10px 0;
  a
    display: inline-block;
    margin: 0 10px;
    text-decoration: none;
    color: inherit;
    position: relative;
    &:first-child
      margin-left: 0;
    &:last-child:after
      display: none;
    &:after
      position: absolute;
      content: '>';
      top: 0;
      right: -15px;
</style>
