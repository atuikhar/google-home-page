import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const lightMode = {
  body: '#fff',
  color: '#000',
  color1: '#000',
  background: '#f8f9fa',
  background2: '#f2f2f2',
  line: '#212327',
}

export const darkMode = {
  body: '#202124',
  color: '#bebebe',
  background: '#303134',
  background2: '#171717',
  color1: '#000',
  line: '#dadce0',
}

const GlobalStyles = createGlobalStyle`
  ${normalize};
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body {
    font-size: 1.6rem;
    cursor: default;
    background-color: ${(props) => props.theme.body};
    font-family: Arimo , sans-serif;

  }
`

export default GlobalStyles
