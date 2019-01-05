<template>
  <wrapper>
    <container>
      <panel>
        <img src="~/assets/logo.svg">
      </panel>
    </container>
  </wrapper>
</template>

<script>
import Container from '../Container'
import Panel from '../Panel'
import { Wrapper } from './styles'
export default {
  components: {
    Container,
    Panel,
    Wrapper
  }
}
</script>
