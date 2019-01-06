import styled from 'vue-styled-components'

export const Wrapper = styled.div`
  padding: 0 0 10px 0;
`

export const Item = styled.a`
  display: inline-block;
  margin: 0 10px;
  text-decoration: none;
  color: inherit;
  position: relative;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    &:after {
      display: none;
    }
  }
  &:after {
    position: absolute;
    content: '>';
    top: 0;
    right: -15px;
  }
`
