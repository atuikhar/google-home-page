import React from 'react'
import $ from 'jquery'

import {
  FooterWrapper,
  LocationNav,
  AboutNav,
  Text,
  Div,
  Div2,
  Location,
} from './FooterStyles'
import { Container } from '@mui/material'

export const Footer = () => {
  const [country, setCountry] = React.useState('India')
  React.useEffect(() => {
    $.get(
      'http://ip-api.com/json',
      function (response) {
        setCountry(response.country)
      },
      'jsonp'
    )
  }, [])
  return (
    <FooterWrapper>
      <LocationNav>
        <Location>{country}</Location>
      </LocationNav>

      <AboutNav>
        <Container>
          <Div>
            <Text>About</Text>
            <Text>Advertising</Text>
            <Text>Business</Text>
            <Text>How Search Works</Text>
          </Div>
        </Container>
        <Container>
          <Div2>
            <Text>Privacy</Text>
            <Text>Terms</Text>
            <Text>Settings</Text>
          </Div2>
        </Container>
      </AboutNav>
    </FooterWrapper>
  )
}
