const query = `
  query {
    kinds {
      result {
        title
        image
        url
      }
    }
    products(_limit: 4, q: "apple") {
      result {
        name
        id
        price
        image
        url
      }
    } 
    categories(_limit: 8) {
      result {
        name
        slug
        id
      }
    }
  }
`

export default query
