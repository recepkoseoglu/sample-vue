const query = `
  query result(
    $page: Int,
    $order: String,
    $categorySlug: String,
    $brandSlug: [String],
    $parentCategoryId: Int,
    $hasCategory: Boolean!,
    ){
      products(_limit: 16, _page: $page, _sort: "price", _order: $order, categorySlug: $categorySlug, brandSlug: $brandSlug) {
        totalCount
        result {
          name 
          price 
          image 
          url  
        }
      }
      categories(parentSlug: $categorySlug, parentId: $parentCategoryId) {
        result {
          name
          slug
          id
        }
      }
      brands(_limit: 1000){
        result {
          name
          slug
          id
        }
      }
      breadcrumb(categorySlug: $categorySlug) @include(if: $hasCategory){
        name
        slug
        id
      }
      category(slug: $categorySlug) {
        name
        slug
        id
      }
    }
`

export default query
