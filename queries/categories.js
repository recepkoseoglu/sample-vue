const query = `
  query result($slug: String){ 
    categories(slug: $slug) {
      totalCount
      result {
        name
        slug
        id
      }
    }
  }
`

export default query
