import styled from 'styled-components'

export const Nav = styled.div``

export const Div = styled.div`
  display: flex;
  justify-content: end;
`
export const LeftNav = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
`

export const Text = styled.p`
  padding-right: 20px;
  cursor: pointer;
  font-size: 13px;
  color: ${(props) => props.theme.color};

  &:hover {
    text-decoration: underline;
  }
  @media only screen and (max-width: 320px) {
    font-size: 7px;
    padding-right: 5px;
  }
`
export const Link = styled.a`
  padding-left: 10px;
  text-decoration: none;
  }
  @media only screen and (max-width: 320px) {
    padding-left: 2px;
  }
`

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  background: #1a73e8;
  padding: 10px;
  min-width: 96px;
  margin-right: 10px;
  color: #fff;

  @media only screen and (max-width: 320px) {
    min-width: 15px;
    height: 10px;
    font-size: 7px;
    padding-top: 4px;
    margin-right: 2px;
    border-radius: 2px;
  }
`
