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

<style lang="css" scoped>
.Breadcrumb {
  padding: 0 0 10px 0;
}
.Breadcrumb a {
  display: inline-block;
  margin: 0 10px;
  text-decoration: none;
  color: inherit;
  position: relative;
}
.Breadcrumb a:first-of-type {
  margin-left: 0px;
}

.Breadcrumb a:last-of-type::after {
  display: none;
}

.Breadcrumb a::after {
  position: absolute;
  content: '>';
  top: 0;
  right: -15px;
}
</style>
