import styled from 'styled-components'

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
`
export const Text = styled.p`
  font-size: 14px;
  padding: 15px;
  cursor: pointer;
  color: ${(props) => props.theme.color};

  &:hover {
    text-decoration: underline;
  }
`
export const Location = styled.p`
  font-size: 14px;
  padding: 15px;
  color: ${(props) => props.theme.color};
`
export const Div = styled.div`
  display: flex;
`
export const Div2 = styled.div`
  display: flex;
  justify-content: end;
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
`
