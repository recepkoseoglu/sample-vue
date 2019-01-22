<template>
  <div class="wrapper">
    <a class="pervious" v-show="page > 1 ? true : ''" :href="pageLink(1)">
      <div>1</div>
    </a>
    <div class="pages">
      <a class="page-item" v-show="page > 1" :href="pageLink(page - 1)">pervious</a>
      <a class="page-item active-page-item" :href="pageLink(page)">{{ page }}</a>
      <a class="page-item" v-show="page < lastPage" :href="pageLink(page + 1)">next</a>
    </div>
    <a class="next" v-show="page < lastPage" :href="pageLink(lastPage)">
      <div>{{ page == lastPage ? '' : lastPage }}</div>
    </a>
  </div>
</template>

<script>
import { urlDecoder } from '../../helpers/urlParser'
import { mapState } from 'vuex'
export default {
  data: () => ({
    limit: 50
  }),
  computed: {
    ...mapState('list', {
      lastPage: function({ productsCount }) {
        return Math.ceil(productsCount / this.limit)
      }
    }),
    page() {
      const page = this.$route.query.page
      return parseInt(page ? page : 1)
    },
    pageLink() {
      return page => urlDecoder({}, { page }, this.$route)
    }
  }
}
</script>

<style lang="css" scoped>
.wrapper {
  height: 60px;
  background-color: white;
  display: grid;
  grid-template-areas: 'pervious pages next';
  gird-template-columns: 50px auto 50px;
  grid-column-gap: 20px;
  padding: 10px;
  line-height: 40px;
}

.pervious {
  grid-area: pervious;
  cursor: pointer;
  color: #41b883;
  font-weight: bold;
  display: block;
  text-decoration: none;
}

.pervious div {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  text-align: center;
  border: 1px solid #ddd;
}

.next {
  grid-area: next;
  justify-self: end;
  cursor: pointer;
  color: #41b883;
  font-weight: bold;
  display: block;
  text-decoration: none;
}
.next > div {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  text-align: center;
  border: 1px solid #ddd;
}

.pages {
  grid-area: pages;
  text-align: center;
}

.page-item {
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
}
.page-item:empty {
  display: none;
}
.active-page-item {
  border: 1px solid #ddd;
  color: white;
  background: #41b883;
  width: 40px;
}
</style>
