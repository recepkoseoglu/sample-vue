function onlyUnique(value, index, self) {
  return self.indexOf(value) === index
}

export const urlDecoder = (params, query, route) => {
  const { brands = '', category } = route.params

  let brand = [...brands.split('-'), params.brand].filter(i => i)
  if (brands.indexOf(params.brand) !== -1) {
    brand = brand.filter(i => i !== params.brand)
  }

  const queries = { ...route.query, ...query }
  const qs = Object.keys(queries)
    .map(key => `${key}=${queries[key]}`)
    .join('&')
  const path = [brand.join('-'), params.category || category]
    .filter(i => i)
    .join('/')

  return `/${[path, qs].join('?')}`
}

export const urlEncoder = (params, query, route) => {
  return
}
