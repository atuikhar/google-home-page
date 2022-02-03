import { ImageList, ImageListItem, Menu } from '@mui/material'
import styled from 'styled-components'

export const Icon = styled.span`
  height: 25x;
  width: 25px;
  margin-right: 20px;
  cursor: pointer;
`

export const GoogleIcons = styled.img`
  height: 35px;
  width: 35px;
  margin: 10px;
`
export const ListContainer = styled(ImageList)`
  width: 350px;
  height: 400px;
`

export const AppList = styled(ImageListItem)`
  text-align: center;

  &:hover {
    background: rgba(215, 235, 245, 1);
    border-radius: 10px;
  }
`
export const Link = styled.a`
  text-decoration: none;
`
export const Text = styled.p`
  font-size: 13px;

  text-align: center;
  padding-bottom: 10px;
`

export const Button = styled.button`
  border: none;
  height: 35px;
  margin: 10px;
  padding: 10px;

  cursor: pointer;
  border-radius: 3px;
  font-size: 14px;
  border: 1px solid #4285f4;

  &:focus {
    border: 1px solid #4285f4;
    background: #fff;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 3px;
    border: 1px solid #4285f4;
  }
`

export const MenuDropDown = styled(Menu)`
  margin-top: 40px;
`
