import { ImageList, ImageListItem } from '@mui/material'
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
  color: #000;
  text-align: center;
  padding-bottom: 10px;
`
