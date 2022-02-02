import styled from 'styled-components'

export const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`
export const LocationNav = styled.div`
  padding-left: 20px;
  box-shadow: #545961 0px 0px 1px, rgba(9, 30, 66, 0.1) 0px 0px 1px 0px;
`
export const AboutNav = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Text = styled.p`
  font-size: 14px;
  padding: 15px;
  cursor: pointer;
  color: #545961;
  &:hover {
    text-decoration: underline;
  }
`
export const Location = styled.p`
  font-size: 14px;
  padding: 15px;
  color: #545961;
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
  color: #545961;
  padding-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`
