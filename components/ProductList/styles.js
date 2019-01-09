import styled from 'vue-styled-components'

export const Wrapper = styled.div`
  display: flex;
`

export const FilterWrapper = styled.div`
  min-height: 400px;
  flex: 0 0 250px;
  @media (max-width: 850px) {
    display: none;
  }
`

export const GridWrapper = styled.div`
  flex: 1;
  padding: 0 10px;
  @media (max-width: 850px) {
    padding: 0;
  }
`

export const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns:
    minmax(180px, 25%)
    minmax(180px, 25%)
    minmax(180px, 25%)
    minmax(180px, 25%);
  grid-gap: 10px;
  @media (max-width: 1100px) {
    grid-template-columns:
      minmax(180px, 33%)
      minmax(180px, 33%)
      minmax(180px, 33%);
  }
  @media (max-width: 850px) {
    grid-template-columns: minmax(180px, 50%) minmax(180px, 50%);
  }
`

export const PaginationWrapper = styled.div`
  grid-area: pagination;
  min-height: 40px;
  margin: 10px 0;
`
