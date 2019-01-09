const query = `
  query result(
    $page: Int,
    $categorySlug: String,
    $brandSlug: [String],
    $parentCategoryId: Int,
    $hasCategory: Boolean!,
    ){
      products(_limit: 16, _page: $page, categorySlug: $categorySlug, brandSlug: $brandSlug) {
        totalCount
        result {
          name 
          price 
          image 
          url  
        }
      }
      categories(parentSlug: $categorySlug, parentId: $parentCategoryId) {
        totalCount
        result {
          name
          slug
          id
        }
      }
      brands(_limit: 1000){
        totalCount
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
    }
`

export default query
