import styled from 'styled-components'

export const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`
export const LocationNav = styled.div`
  padding-left: 20px;
  box-shadow: #bebebe 0px 0px 1px 0px, rgba(27, 31, 35, 0.15) 0px 1px 0px 1px;
`
export const AboutNav = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Text = styled.p`
  font-size: 13px;
  padding: 15px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
export const Location = styled.p`
  font-size: 13px;
  padding: 15px;
  cursor: pointer;
`
export const Div = styled.div`
  display: flex;
`
export const Div2 = styled.div`
  display: flex;
  justify-content: end;
`
