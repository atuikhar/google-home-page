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
  &:hover {
    text-decoration: underline;
  }
`
export const Link = styled.a`
  padding-left: 10px;
  text-decoration: none;
  color: ${(props) => props.theme.color};
  }
`
