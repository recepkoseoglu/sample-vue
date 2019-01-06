import styled, { css } from 'vue-styled-components'

export const Wrapper = styled.div`
  height: 60px;
  background-color: white;
  display: grid;
  grid-template-areas: 'pervious pages next';
  gird-template-columns: 50px auto 50px;
  grid-column-gap: 20px;
  padding: 10px;
  line-height: 40px;
`

export const Pervious = styled.a`
  grid-area: pervious;
  cursor: pointer;
  color: #41b883;
  font-weight: bold;
  display: block;
  text-decoration: none;
  > div {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    text-align: center;
    border: 1px solid #ddd;
  }
`
export const Next = styled.a`
  grid-area: next;
  justify-self: end;
  cursor: pointer;
  color: #41b883;
  font-weight: bold;
  display: block;
  text-decoration: none;
  > div {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    text-align: center;
    border: 1px solid #ddd;
  }
`
export const Pages = styled.div`
  grid-area: pages;
  text-align: center;
`
const pageItemProps = { primary: Boolean }

export const PageItem = styled('a', pageItemProps)`
  height: 40px;
  border-radius: 20px;
  padding: 10px 0;
  line-height: 20px;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  color: #41b883;
  margin: 0 10px;
  &:empty {
    display: none;
  }
  position: relative;
  ${props =>
    props.primary
      ? css`
          border: 1px solid #ddd;
          color: white;
          background: #41b883;
          width: 40px;
        `
      : ''};
`
