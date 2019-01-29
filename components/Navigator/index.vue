<template>
  <div class="navigator">
    <container>
      <panel>
        <div class="navigator-content">
          <div>
            <a href="/">
              <img src="~/assets/logo.svg">
            </a>
          </div>
          <div>
            <a
              href="https://github.com/recepkoseoglu/sample-vue"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://res.cloudinary.com/arasksgl/image/upload/v1548614566/github.png">
            </a>
          </div>
        </div>
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
.navigator
  width: 100%
  background-color: white
  border-bottom: 1px solid #eee
  img
    height: 40px
    text-align: center

.navigator-content
  display: flex
  > div:first-child
    flex: 1
  > div:last-child
    text-align: end
    flex: 0
</style>
