<template>
  <div>
    <no-ssr>
      <navigator/>
      <container>
        <panel>
          <nuxt/>
        </panel>
      </container>
    </no-ssr>
  </div>
</template>

<script>
import Navigator from '../components/Navigator'
import Container from '../components/Container'
import Panel from '../components/Panel'
export default {
  components: {
    Navigator,
    Container,
    Panel
  }
}
</script>


<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: #f1f5f8;
  font-family: arial;
  font-size: 14px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
