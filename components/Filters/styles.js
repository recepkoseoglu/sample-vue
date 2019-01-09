import styled from 'vue-styled-components'

export const Wrapper = styled.div`
  padding: 0 15px 10px;
  background-color: white;
`
export const SectionTitle = styled.div`
  padding: 15px 0;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
  color: #41b883;
  font-weight: bold;
`

export const SectionItem = styled.a`
  line-height: 20px;
  cursor: pointer;
  text-decoration: none;
  display: block;
  color: inherit;
`
export const Section = styled.div`
  max-height: 400px;
  overflow: auto;
  padding: 10px 0;
  &:empty {
    display: none;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  display: block;
  height: 30px;
  padding: 0 10px;
  &:focus {
    outline: none;
  }
`
export const CheckboxContainer = styled.div`
  position: relative;
  display: flex;
  line-height: 20px;
  font-size: 13px;
  margin: 5px 0;
`

export const Checkbox = styled.input`
  position: relative;
  margin-right: 25px;
  margin-top: 5px;
  padding: 0;
  cursor: pointer;
  &:before {
    position: absolute;
    content: ' ';
    width: 18px;
    height: 18px;
    top: -5px;
    left: 0px;
    background: white;
    border: solid 2px #41b883;
    border-radius: 2px;
  }
  &:focus {
    &:before {
      border: solid 2px #41b883;
    }
  }
  &:checked {
    &:before {
      background: #41b883;
      border: solid 2px #41b883;
    }
    &:after {
      position: absolute;
      content: ' ';
      left: 4px;
      top: 3px;
      background: white;
      width: 2px;
      height: 2px;
      box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white,
        4px -4px 0 white, 4px -6px 0 white, 4px -8px 0 white;
      transform: rotate(45deg);
    }
  }
`
