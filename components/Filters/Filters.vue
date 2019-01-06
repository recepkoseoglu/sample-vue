<template>
  <Wrapper>
    <SectionTitle v-show="categories.length">Kategoriler</SectionTitle>
    <Section>
      <SectionItem
        v-for="item in categories"
        :key="item.id + item.slug"
        :href="'/' + item.slug"
      >{{ item.name }}</SectionItem>
    </Section>
    <SectionTitle>Marka</SectionTitle>
    <Section>
      <SectionItem v-for="item in brands" :key="item.id">{{ item.name }}</SectionItem>
    </Section>
  </Wrapper>
</template>

<script>
import { Wrapper, SectionTitle, SectionItem, Section } from './styles'
export default {
  components: {
    Wrapper,
    SectionTitle,
    SectionItem,
    Section
  },
  computed: {
    categories() {
      return this.$store.state.categories.result
    },
    brands() {
      return this.$store.state.brands.result
    }
  }
}
</script>
