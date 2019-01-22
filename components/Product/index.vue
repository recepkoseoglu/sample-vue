<template>
  <a class="wrapper" :href="data.url" target="_blank">
    <figure>
      <img :src="data.image">
    </figure>
    <div class="title">{{ data.name }}</div>
    <div class="price">{{ '$' + data.price }}</div>
  </a>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="css" scoped>
.wrapper {
  border-radius: 4px;
  background-color: white;
  min-height: 200px;
  padding: 10px;
  text-decoration: none;
  color: inherit;
}
.wrapper figure {
  height: 180px;
  margin: 0 auto;
}
.wrapper figure > img {
  display: block;
  height: 100%;
  max-width: 100%;
  margin: 0 auto;
}

.title {
  line-height: 20px;
  font-size: 16px;
  font-weight: bold;
  margin: 20px auto;
  max-height: 40px;
  max-width: 200px;
  overflow: hidden;
  color: dimgray;
}

.price {
  line-height: 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 10px 0;
  color: red;
}
</style>
