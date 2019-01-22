<template>
  <div class="filters">
    <div class="filter-title" v-show="categories.length">Kategoriler</div>
    <div class="section">
      <a
        class="section-item"
        v-for="item in categories"
        :key="item.id + item.slug"
        :href="categoryUrl(item.slug)"
      >{{ item.name }}</a>
    </div>
    <div class="filter-title">Marka</div>
    <input class="search-input" :value="valueOfBrand" @input="handleInput">
    <div class="section">
      <a
        class="section-item"
        v-for="item in filteredBrands"
        :key="item.id"
        :href="brandUrl(item.slug)"
      >
        <div class="checkbox-container">
          <input class="checkbox" type="checkbox" disabled :checked="isBrandSelected(item.slug)">
          <span>{{ item.name }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { urlDecoder } from '../../helpers/urlParser'
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('list', ['filteredBrands']),
    ...mapState('list', ['valueOfBrand', 'categories']),
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
      this.$store.commit('list/setbrandValue', value.target.value)
    }
  }
}
</script>

<style lang="css" scoped>
.filters {
  padding: 0 15px 10px;
  background-color: white;
}

.filter-title {
  padding: 15px 0;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
  color: #41b883;
  font-weight: bold;
}

.section-item {
  line-height: 20px;
  cursor: pointer;
  text-decoration: none;
  display: block;
  color: inherit;
}

.section {
  max-height: 400px;
  overflow: auto;
  padding: 10px 0;
}
.section:empty {
  display: none;
}

.search-input {
  width: 100%;
  display: block;
  height: 30px;
  padding: 0 10px;
}
.search-input:focus {
  outline: none;
}

.checkbox-container {
  position: relative;
  display: flex;
  line-height: 20px;
  font-size: 13px;
  margin: 5px 0;
}

.checkbox {
  position: relative;
  margin-right: 25px;
  margin-top: 5px;
  padding: 0;
  cursor: pointer;
  pointer-events: none;
}
.checkbox:before {
  position: absolute;
  content: ' ';
  width: 18px;
  height: 18px;
  top: -5px;
  left: 0px;
  background: white;
  border: solid 2px #41b883;
  border-radius: 2px;
}
.checkbox:focus::before {
  border: solid 2px #41b883;
}
.checkbox:checked::before {
  background: #41b883;
  border: solid 2px #41b883;
}
.checkbox:checked::after {
  position: absolute;
  content: ' ';
  left: 4px;
  top: 3px;
  background: white;
  width: 2px;
  height: 2px;
  box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white,
    4px -6px 0 white, 4px -8px 0 white;
  transform: rotate(45deg);
}
</style>
