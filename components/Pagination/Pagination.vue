<template>
  <Wrapper>
    <Pervious v-show="page > 1 ? true : ''" :href="'/?page=1'">
      <div>1</div>
    </Pervious>
    <Pages>
      <PageItem v-show="page > 1" :href="'/?page=' + (page - 1)">Pervious</PageItem>
      <PageItem primary :href="'/?page=' + page">{{ page }}</PageItem>
      <PageItem v-show="page < lastPage" :href="'/?page=' + (page + 1)">Next</PageItem>
    </Pages>
    <Next v-show="page < lastPage" :href=" '/?page=' + lastPage ">
      <div>{{ page == lastPage ? '' : lastPage }}</div>
    </Next>
  </Wrapper>
</template>

<script>
import { Wrapper, Pervious, Next, Pages, PageItem } from './styles'
export default {
  components: {
    Wrapper,
    Pervious,
    Next,
    Pages,
    PageItem
  },
  data: () => ({
    limit: 50
  }),
  computed: {
    lastPage() {
      const totalCount = this.$store.state.products.totalCount
      return Math.ceil(totalCount / this.limit)
    },
    page() {
      const page = this.$route.query.page
      return parseInt(page ? page : 1)
    }
  }
}
</script>
