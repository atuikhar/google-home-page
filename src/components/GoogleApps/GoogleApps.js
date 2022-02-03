import React from 'react'

import {
  Icon,
  GoogleIcons,
  ListContainer,
  AppList,
  Link,
  Text,
  Button,
  MenuDropDown,
} from './GoogleAppsStyles'

import { apps, products } from '../../data'

export const GoogleApps = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Icon
        id="menu-button"
        aria-controls={open ? 'menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <svg className="gb_Oe" focusable="false" viewBox="0 0 24 24">
          <path
            fill={'#393b40'}
            d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
          ></path>
        </svg>
      </Icon>
      <MenuDropDown
        id="menu"
        aria-labelledby="menu-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <ListContainer cols={3} rowHeight={70}>
          {apps.map((a, index) => (
            <AppList key={index}>
              <Link href={a.link}>
                <GoogleIcons src={a.img} alt={a.name} loading="lazy" />
              </Link>
              <Text>{a.name}</Text>
            </AppList>
          ))}
          {products.map((p, index) => (
            <AppList key={index}>
              <Link href={p.link}>
                <GoogleIcons src={p.img} alt={p.name} loading="lazy" />
              </Link>
              <Text>{p.name}</Text>
            </AppList>
          ))}
          <Link href="https://about.google/products/">
            <Button>More...</Button>
          </Link>
        </ListContainer>
      </MenuDropDown>
    </>
  )
}
