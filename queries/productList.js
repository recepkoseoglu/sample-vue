const query = `
  query result(
    $page: Int,
    $categoryId: Int,
    $parentCategoryId: Int,
    ){
      products(_limit: 50, _page: $page, categoryId: $categoryId) {
        totalCount
        result {
          name 
          price 
          image 
          url  
        }
      }
      categories(parentId: $parentCategoryId) {
        totalCount
        result {
          name
          slug
          id
        }
      }
      brands{
        totalCount
        result {
          name
          slug
          id
        }
      }
      breadcrumb(categoryId: $categoryId){
        name
        slug
        id
      }
    }
`

export default query
