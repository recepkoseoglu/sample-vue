import styled from 'vue-styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 10px;
  @media (max-width: 1100px) {
    grid-template-columns: auto auto auto auto;
  }
  @media (max-width: 850px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 650px) {
    grid-template-columns: auto auto;
  }
`
