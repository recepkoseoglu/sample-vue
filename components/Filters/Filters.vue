<template>
  <Wrapper>
    <SectionTitle v-show="categories.length">Kategoriler</SectionTitle>
    <Section>
      <SectionItem
        v-for="item in categories"
        :key="item.id + item.slug"
        :href="categoryUrl(item.slug)"
      >{{ item.name }}</SectionItem>
    </Section>
    <SectionTitle>Marka</SectionTitle>
    <SearchInput :value="brandName" @input="handleInput"/>
    <Section>
      <SectionItem v-for="item in brands" :key="item.id" :href="brandUrl(item.slug)">
        <CheckboxContainer>
          <Checkbox type="checkbox" :checked="isBrandSelected(item.slug)"/>
          <span>{{ item.name }}</span>
        </CheckboxContainer>
      </SectionItem>
    </Section>
  </Wrapper>
</template>

<script>
import { urlDecoder } from '../../helpers/urlParser'
import {
  Wrapper,
  SectionTitle,
  SectionItem,
  Section,
  SearchInput,
  CheckboxContainer,
  Checkbox
} from './styles'
export default {
  components: {
    Wrapper,
    SectionTitle,
    SectionItem,
    Section,
    SearchInput,
    CheckboxContainer,
    Checkbox
  },
  computed: {
    categories() {
      return this.$store.state.categories.result
    },
    brands() {
      return this.$store.state.filteredBrands
    },
    brandName() {
      return this.$store.state.brandName
    },
    brandUrl() {
      return slug => urlDecoder({ brand: slug }, null, this.$route)
    },
    categoryUrl() {
      return slug => urlDecoder({ category: slug }, null, this.$route)
    },
    isBrandSelected() {
      const { brands = '' } = this.$route.params
      return slug => brands.indexOf(slug) !== -1
    }
  },
  methods: {
    handleInput(value) {
      this.$store.dispatch('SET_BRAND_NAME', value)
    }
  }
}
</script>
