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
  background: ${(props) => props.theme.background};
  cursor: pointer;
  border-radius: 3px;
  &:focus {
    border: 1px solid #4285f4;
    background: #fff;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    border-radius: 3px;
  }
`
export const TextBtn = styled.p`
  color: ${(props) => props.theme.color};

  font-size: 13px;
`
export const Text = styled.p`
  color: #1a0dab;
  font-size: 13px;
`
export const Link = styled.a`
  padding-left: 10px;

  text-decoration: none;
`

export const Wrapper = styled.div`
  border: 1px solid #dbdbdb;
  height: 45px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  padding: 10px;

  &:hover {
    border: none;
    box-shadow: rgba(99, 99, 99, 0.4) 0px 2px 8px 0px;
  }
`

export const SearchIcon = styled.div`
  height: 25px;
  width: 25px;
`

export const InputContainer = styled.div``

export const Input = styled.input`
  width: 500px;
  height: 40px;
  border: none;
  outline: none;
  padding-left: 10px;
  color: ${(props) => props.theme.color};
  background: none;
`

export const VoiceSearchIcon = styled.div`
  height: 25px;
  width: 25px;
  cursor: pointer;
`
