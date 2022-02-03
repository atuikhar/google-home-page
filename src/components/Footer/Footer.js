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
  Link,
  LinkText,
  MenuItemList,
  MenuWrapper,
} from './FooterStyles'
import { Container } from '@mui/material'

export const Footer = ({ toggleTheme }) => {
  const [country, setCountry] = React.useState('India')

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
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
            <Link href="https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1">
              <Text>About</Text>
            </Link>
            <Link href="https://ads.google.com/intl/en_in/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">
              <Text>Advertising</Text>
            </Link>
            <Link href="https://www.google.com/intl/en_in/business/">
              <Text>Business</Text>
            </Link>

            <Link href="https://www.google.com/search/howsearchworks/?fg=1">
              <Text>How Search Works</Text>
            </Link>
          </Div>
        </Container>
        <Container>
          <Div2>
            <Link href="https://policies.google.com/privacy?hl=en-IN&fg=1">
              <Text>Privacy</Text>
            </Link>
            <Link href="https://policies.google.com/terms?hl=en-IN&fg=1">
              <Text>Terms</Text>
            </Link>
            <Text
              id="settings-button"
              aria-controls={open ? 'settings-MenuWrapper' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              Settings
            </Text>
            <MenuWrapper
              id="settings-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'settings-button',
              }}
            >
              <Link href="https://www.google.com/preferences?hl=en-IN&fg=1">
                <MenuItemList>
                  <LinkText>Search settings</LinkText>
                </MenuItemList>
              </Link>
              <Link href="https://www.google.com/advanced_search?hl=en-IN&fg=1">
                <MenuItemList>
                  <LinkText>Advance search</LinkText>
                </MenuItemList>
              </Link>
              <Link href="https://myaccount.google.com/yourdata/search?utm_source=googlemenu&fg=1&pli=1">
                <MenuItemList>
                  <LinkText>Your data in Search</LinkText>
                </MenuItemList>
              </Link>
              <Link href="https://myactivity.google.com/product/search?utm_source=google&hl=en-IN&fg=1">
                <MenuItemList>
                  <LinkText>Search history</LinkText>
                </MenuItemList>
              </Link>
              <Link href="https://support.google.com/websearch/?visit_id=637794181238808827-3228998082&hl=en-IN&rd=2#topic=3378866">
                <MenuItemList>
                  <LinkText>Search help</LinkText>
                </MenuItemList>
              </Link>
              <Link href="https://www.google.com/tools/feedback/intl/en/">
                <MenuItemList>
                  <LinkText>Send feedback</LinkText>
                </MenuItemList>
              </Link>
              <MenuItemList onClick={toggleTheme}>
                <LinkText onClick={handleClose}>Dark Theme</LinkText>
              </MenuItemList>
            </MenuWrapper>
          </Div2>
        </Container>
      </AboutNav>
    </FooterWrapper>
  )
}
