import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles, { lightMode, darkMode } from './styles/GlobalStyles'

import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Hero } from './components/Hero/Hero'

const Div = styled.div`
  color: ${(props) => props.theme.fontColor};
`
const App = () => {
  const [theme, setTheme] = React.useState('light')

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
        <GlobalStyles />
        <Div>
          <Header />
          <Hero />
          <Footer theme={theme} toggleTheme={toggleTheme} />
        </Div>
      </ThemeProvider>
    </>
  )
}

export default App
