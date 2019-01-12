<template>
  <div class="Wrapper">
    <a class="Pervious" v-show="page > 1 ? true : ''" :href="'/?page=1'">
      <div>1</div>
    </a>
    <div class="Pages">
      <a class="PageItem" v-show="page > 1" :href="'/?page=' + (page - 1)">Pervious</a>
      <a class="PageItem ActivePageItem" :href="'/?page=' + page">{{ page }}</a>
      <a class="PageItem" v-show="page < lastPage" :href="'/?page=' + (page + 1)">Next</a>
    </div>
    <a class="Next" v-show="page < lastPage" :href=" '/?page=' + lastPage ">
      <div>{{ page == lastPage ? '' : lastPage }}</div>
    </a>
  </div>
</template>

<script>
export default {
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

<style lang="sass" scoped>
.Wrapper
  height: 60px;
  background-color: white;
  display: grid;
  grid-template-areas: 'pervious pages next';
  gird-template-columns: 50px auto 50px;
  grid-column-gap: 20px;
  padding: 10px;
  line-height: 40px;

.Pervious
  grid-area: pervious;
  cursor: pointer;
  color: #41b883;
  font-weight: bold;
  display: block;
  text-decoration: none;
  > div
    width: 40px;
    height: 40px;
    border-radius: 20px;
    text-align: center;
    border: 1px solid #ddd;

.Next
  grid-area: next;
  justify-self: end;
  cursor: pointer;
  color: #41b883;
  font-weight: bold;
  display: block;
  text-decoration: none;
  > div
    width: 40px;
    height: 40px;
    border-radius: 20px;
    text-align: center;
    border: 1px solid #ddd;

.Pages
  grid-area: pages;
  text-align: center;

.PageItem
  position: relative;
  height: 40px;
  border-radius: 20px;
  padding: 10px 0;
  line-height: 20px;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  color: #41b883;
  margin: 0 10px;
  &:empty
    display: none;
.ActivePageItem
  border: 1px solid #ddd;
  color: white;
  background: #41b883;
  width: 40px;

</style>
