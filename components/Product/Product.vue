<template>
  <Wrapper :href="data.url" target="_blank">
    <figure>
      <img :src="data.image">
    </figure>
    <Title>{{ data.name }}</Title>
    <Price>{{ '$' + data.price }}</Price>
    <Company>{{ data.CompanyName }}</Company>
  </Wrapper>
</template>

<script>
import { Wrapper, Title, Price, Company } from './styles'
export default {
  components: {
    Wrapper,
    Title,
    Price,
    Company
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
