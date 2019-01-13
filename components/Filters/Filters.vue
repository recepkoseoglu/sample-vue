<template>
  <div class="Filters">
    <div class="FilterTitle" v-show="categories.length">Kategoriler</div>
    <div class="Section">
      <a
        class="SectionItem"
        v-for="item in categories"
        :key="item.id + item.slug"
        :href="categoryUrl(item.slug)"
      >{{ item.name }}</a>
    </div>
    <div class="FilterTitle">Marka</div>
    <input class="SearchInput" :value="brandName" @input="handleInput">
    <div class="Section">
      <a class="SectionItem" v-for="item in brands" :key="item.id" :href="brandUrl(item.slug)">
        <div class="CheckboxContainer">
          <input class="Checkbox" type="checkbox" :checked="isBrandSelected(item.slug)">
          <span>{{ item.name }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { urlDecoder } from '../../helpers/urlParser'
export default {
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

<style lang="css" scoped>
.Filters {
  padding: 0 15px 10px;
  background-color: white;
}

.FilterTitle {
  padding: 15px 0;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
  color: #41b883;
  font-weight: bold;
}

.SectionItem {
  line-height: 20px;
  cursor: pointer;
  text-decoration: none;
  display: block;
  color: inherit;
}

.Section {
  max-height: 400px;
  overflow: auto;
  padding: 10px 0;
}
.Section:empty {
  display: none;
}

.SearchInput {
  width: 100%;
  display: block;
  height: 30px;
  padding: 0 10px;
}
.SearchInput:focus {
  outline: none;
}

.CheckboxContainer {
  position: relative;
  display: flex;
  line-height: 20px;
  font-size: 13px;
  margin: 5px 0;
}

.Checkbox {
  position: relative;
  margin-right: 25px;
  margin-top: 5px;
  padding: 0;
  cursor: pointer;
}
.Checkbox:before {
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
.Checkbox:focus::before {
  border: solid 2px #41b883;
}
.Checkbox:checked::before {
  background: #41b883;
  border: solid 2px #41b883;
}
.Checkbox:checked::after {
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
