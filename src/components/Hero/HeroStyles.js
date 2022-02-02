import { Container } from '@mui/material'
import styled from 'styled-components'

export const HeroWrapper = styled(Container)`
  margin-top: 100px;
`
export const GoogleLogo = styled.div`
  display: flex;
  justify-content: center;
`

export const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

export const Div1 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
`

export const Div2 = styled.div``

export const Button = styled.button`
  border: none;
  height: 35px;
  margin: 10px;
  padding: 10px;
  background: #f8f9fa;
  cursor: pointer;
  border-radius: 3px;
  font-size: 14px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 3px;
  }
`
export const Text = styled.p`
  font-size: 13px;
`
export const Link = styled.a`
  padding-left: 10px;
  text-decoration: none;
`
