import React from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { Nav, Div, LeftNav, Text, Icon } from './HeaderStyles'

const iconStyles = {
  fontSize: '48px',
  marginRight: '20px',
  cursor: 'pointer',
}
export const Header = () => {
  return (
    <Nav>
      <Div>
        <LeftNav>
          <Text>Gmail</Text>
          <Text>Images</Text>
          <Icon>
            <svg className="gb_Oe" focusable="false" viewBox="0 0 24 24">
              <path
                fill={'#787878'}
                d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
              ></path>
            </svg>
          </Icon>
          <AccountCircle style={iconStyles} />
        </LeftNav>
      </Div>
    </Nav>
  )
}
