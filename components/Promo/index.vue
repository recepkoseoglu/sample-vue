<template>
  <div class="promo">
    <div>
      <div
        class="slide"
        v-for="(item, index) in promo"
        :key="item.id"
        v-show="sliderIndex === index"
      >
        <img :src="item.image" :alt="item.title">
      </div>
    </div>
    <ul>
      <li
        class="dot"
        v-for="(item, index) in promo"
        :key="item.id"
        :class="{ active: index === sliderIndex}"
        @click="setsliderIndex(index)"
      >
        <img :src="item.image" :alt="item.title">
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('home', ['sliderIndex', 'promo'])
  },
  methods: {
    setsliderIndex(value) {
      this.$store.commit('home/setSliderIndex', value)
    }
  }
}
</script>

<style lang="sass" scoped>
.promo
  width: 100%
  > div:first-child
    background: black
    overflow: hidden
  > ul:last-child 
    height: 60px
    padding: 15px
    background: white
    display: flex
    justify-content: center
  @media (max-width: 850px)
    width: 100%
      
.slide
  color: white
  > img
   width: 100%

.dot 
  height: 30px
  margin: 0 5px
  border: 1px solid #eee
  cursor: pointer
  list-style-type: none
  border-radius: 2px
  &.active
    border: 2px solid black
  > img 
    height: 100%
</style>
