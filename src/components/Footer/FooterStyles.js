import styled from 'styled-components'
import { Menu, MenuItem } from '@mui/material'

export const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`
export const LocationNav = styled.div`
  padding-left: 20px;
  border: none;
  background: ${(props) => props.theme.background2};
  box-shadow: ${(props) => props.theme.color};
`
export const AboutNav = styled.div`
  background: ${(props) => props.theme.background2};
  box-shadow: ${(props) => props.theme.line} 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 470px) {
    display: block;
  }
`
export const Text = styled.p`
  font-size: 14px;
  padding: 15px;
  cursor: pointer;
  color: ${(props) => props.theme.color};

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 800px) {
    font-size: 10px;
    padding: 10px;
  }

  @media screen and (max-width: 320px) {
    font-size: 5px;
    padding: 5px;
  }
`
export const Location = styled.p`
  font-size: 14px;
  padding: 15px;
  color: ${(props) => props.theme.color};
  @media and screen (max-width: 470px) {
    font-size: 7px;
    padding: 7px;
  }
  @media screen and (max-width: 320px) {
    font-size: 5px;
    padding: 5px;
  }
  @media screen and (max-width: 130px) {
    font-size: 1px;
    padding: 0px;
  }
`
export const Div = styled.div`
  display: flex;

  @media only screen and (max-width: 320px) {
    display: flex;
    justify-content: center;
  }
`
export const Div2 = styled.div`
  display: flex;
  justify-content: end;

  @media only screen and (max-width: 320px) {
    display: flex;
    justify-content: center;
  }
`

export const Link = styled.a`
  text-decoration: none;
`

export const LinkText = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.color1};
  padding-top: 10px;

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 320px) {
    font-size: 8px;
    padding: 0px;
  }
`

export const MenuItemList = styled(MenuItem)`
  padding: 0px;
  margin: 0px;
`

export const MenuWrapper = styled(Menu)`
  height: 500px;

  @media only screen and (max-width: 320px) {
    height: 390px;
  }
`
