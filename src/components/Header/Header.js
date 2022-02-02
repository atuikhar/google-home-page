import React from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { GoogleApps } from 'components/GoogleApps/GoogleApps'
import { Nav, Div, LeftNav, Text, Link } from './HeaderStyles'

const iconStyles = {
  fontSize: '37px',
  marginRight: '15px',
  cursor: 'pointer',
}
export const Header = () => {
  return (
    <Nav>
      <Div>
        <LeftNav>
          <Link href="https://mail.google.com/">
            <Text>Gmail</Text>
          </Link>
          <Link href="https://www.google.co.in/imghp?hl=en&ogbl">
            <Text>Images</Text>
          </Link>
          <GoogleApps />
          <AccountCircle style={iconStyles} />
        </LeftNav>
      </Div>
    </Nav>
  )
}
