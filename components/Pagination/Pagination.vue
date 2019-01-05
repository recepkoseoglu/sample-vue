<template>
  <Wrapper>
    <slot/>
  </Wrapper>
</template>

<script>
import { Wrapper } from './styles'
export default {
  components: {
    Wrapper
  }
}
</script>
