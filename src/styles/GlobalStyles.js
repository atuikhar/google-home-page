import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const lightMode = {
  body: '#fff',
  fontColor: '#000',
}

export const darkMode = {
  body: '#202124',
  fontColor: '#dedede',
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
