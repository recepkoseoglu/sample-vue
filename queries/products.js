const query = `
  query { 
    products(_limit:20) {
      totalCount
      result {
        name 
        price 
        image 
        url  
      }
    }
  }
`

export default query
