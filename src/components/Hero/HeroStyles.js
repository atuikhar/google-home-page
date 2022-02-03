import { Container } from '@mui/material'
import styled from 'styled-components'

export const HeroWrapper = styled(Container)`
  margin-top: 100px;

  @media screen and (max-width: 580px) {
    margin-top: 50px;
  }
`
export const GoogleLogo = styled.div`
  display: flex;
  justify-content: center;
  }
`

export const Div = styled.div`
  padding-top: 20px;
  width: 100%;

  @media screen and (max-width: 320px) {
    padding-top: 10px;
  }
`
export const Div2 = styled.div`
  display: flex;
  justify-content: center;
`
export const Div3 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Div1 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
`

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
  @media only screen and (max-width: 320px) {
    height: 20px;
    margin-top: 5px;
    padding: 3px;
  }
`
export const TextBtn = styled.p`
  color: ${(props) => props.theme.color};

  font-size: 13px;
  @media only screen and (max-width: 320px) {
    font-size: 5px;
  }
`
export const Text1 = styled.p`
  color: ${(props) => props.theme.color};
  margin-top: 20px;

  font-size: 13px;
  @media only screen and (max-width: 320px) {
    font-size: 5px;
  }
`
export const Text = styled.p`
  color: ${(props) => props.theme.linkColor};
  font-size: 13px;
  @media only screen and (max-width: 480px) {
    font-size: 9px;
  }
  @media only screen and (max-width: 320px) {
    font-size: 6px;
  }
`

export const Link = styled.a`
  color: ${(props) => props.theme.linkColor};

  padding-left: 10px;
  margin-top: 20px;

  text-decoration: none;
`

export const Wrapper = styled.div`
  width: 60%;
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
  @media only screen and (max-width: 480px) {
    height: 30px;
    width: 100%;
  }

  @media only screen and (max-width: 320px) {
    height: 30px;
    width: 100%;
  }
`

export const SearchIcon = styled.div`
  height: 25px;
  width: 25px;
`

export const InputContainer = styled.div`
  width: 100%;
`

export const Input = styled.input`
  width: 100%;
  height: 45px;
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

export const Google = styled.img`
  height: 150px;
  width: 400px;
  @media only screen and (max-width: 480px) {
    width: 350px;
    height: 100px;
  }
  @media only screen and (max-width: 320px) {
    width: 200px;
    height: 80px;
  }
`
