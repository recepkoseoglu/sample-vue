import styled from 'vue-styled-components'

export const Wrapper = styled.a`
  border-radius: 4px;
  background-color: white;
  min-height: 200px;
  padding: 10px;
  text-decoration: none;
  color: inherit;
  > figure {
    width: 180px;
    height: 180px;
    margin: 0 auto;
  }
  > figure > img {
    display: block;
    height: 100%;
    max-width: 100%;
    margin: 0 auto;
  }
`

export const Title = styled.div`
  line-height: 20px;
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
  max-height: 40px;
  overflow: hidden;
  color: dimgray;
`

export const Price = styled.div`
  line-height: 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 10px 0;
  color: red;
`

export const Company = styled.div`
  line-height: 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 10px 0;
  color: darkgray;
`
