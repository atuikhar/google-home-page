import styled from 'styled-components'

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
`

export const VoiceSearchIcon = styled.div`
  height: 25px;
  width: 25px;
  cursor: pointer;
`
