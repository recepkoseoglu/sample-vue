<template>
  <div class="Navigator">
    <container>
      <panel>
        <img src="~/assets/logo.svg">
      </panel>
    </container>
  </div>
</template>

<script>
import Container from '../Container'
import Panel from '../Panel'
export default {
  components: {
    Container,
    Panel
  }
}
</script>

<style lang="sass" scoped>
.Navigator
  width: 100%;
  height: 60px;
  background-color: white;
  border-bottom: 1px solid #eee;
  img
    height: 26px;
    text-align: center;
</style>
