import React from 'react'
import { GoogleApps } from 'components/GoogleApps/GoogleApps'
import { Nav, Div, LeftNav, Text, Link, Button } from './HeaderStyles'

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
          <Link href="https://accounts.google.com/signin/v2/identifier?hl=en&passive=true&continue=https%3A%2F%2Fwww.google.com%2F%3Fpccc%3D1&ec=GAZAmgQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
            <Button>Sign in</Button>
          </Link>
        </LeftNav>
      </Div>
    </Nav>
  )
}
