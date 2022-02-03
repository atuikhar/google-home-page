import React from 'react'
import {
  HeroWrapper,
  Div,
  Button,
  Div1,
  GoogleLogo,
  Text,
  TextBtn,
  Link,
  Wrapper,
  Input,
  SearchIcon,
  InputContainer,
  VoiceSearchIcon,
  Div2,
  Google,
  Text1,
  Div3,
} from './HeroStyles'

export const Hero = () => {
  const [query, setQuery] = React.useState('')

  const handleSearch = (event) => {
    if (event.key === 'Enter' && query !== '') {
      window.location.href = `https://www.google.com/search?q=${query}`
    }
  }
  const handleFeelingLucky = () => {
    window.location.href = 'https://www.google.com/doodles'
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (query !== '') {
      window.location.href = `https://www.google.com/search?q=${query}`
    }
  }
  return (
    <HeroWrapper>
      <GoogleLogo>
        <Google src="/GoogleLogo.svg" />
      </GoogleLogo>
      <Div>
        <Div2>
          <Wrapper>
            <SearchIcon>
              <svg
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#bebebe"
                  d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                ></path>
              </svg>
            </SearchIcon>
            <InputContainer>
              <Input
                onKeyDown={handleSearch}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
              />
            </InputContainer>
            <VoiceSearchIcon>
              <svg
                focusable="false"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#4285f4"
                  d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
                ></path>
                <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
                <path
                  fill="#fbbc05"
                  d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
                ></path>
                <path
                  fill="#ea4335"
                  d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
                ></path>
              </svg>
            </VoiceSearchIcon>
          </Wrapper>
        </Div2>
      </Div>
      <Div1>
        <Button onClick={(e) => handleSubmit(e)}>
          <TextBtn>Google Search</TextBtn>
        </Button>
        <Button onClick={handleFeelingLucky}>
          <TextBtn>I'm Feeling Lucky</TextBtn>
        </Button>
      </Div1>
      <Div3>
        <Text1>Google offered in: </Text1>
        <Link href="https://www.google.co.in/setprefs?sig=0_eQx7deOLBubo2lhAtouT3N0__7w%3D&amp;hl=hi&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwj-roqR2OD1AhWXTmwGHVGFCIAQ2ZgBCBA">
          <Text>हिन्दी</Text>
        </Link>
        <Link href="https://www.google.co.in/setprefs?sig=0_eQx7deOLBubo2lhAtouT3N0__7w%3D&amp;hl=bn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwj-roqR2OD1AhWXTmwGHVGFCIAQ2ZgBCBE">
          <Text>বাংলা</Text>
        </Link>
        <Link href="https://www.google.co.in/setprefs?sig=0_eQx7deOLBubo2lhAtouT3N0__7w%3D&amp;hl=te&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwj-roqR2OD1AhWXTmwGHVGFCIAQ2ZgBCBI">
          <Text>తెలుగు</Text>
        </Link>
        <Link href="https://www.google.co.in/setprefs?sig=0_eQx7deOLBubo2lhAtouT3N0__7w%3D&amp;hl=mr&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwj-roqR2OD1AhWXTmwGHVGFCIAQ2ZgBCBM">
          <Text>मराठी</Text>
        </Link>
        <Link href="https://www.google.co.in/setprefs?sig=0_eQx7deOLBubo2lhAtouT3N0__7w%3D&amp;hl=ta&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwj-roqR2OD1AhWXTmwGHVGFCIAQ2ZgBCBQ">
          <Text>தமிழ்</Text>
        </Link>
        <Link href="https://www.google.co.in/setprefs?sig=0_eQx7deOLBubo2lhAtouT3N0__7w%3D&amp;hl=gu&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwj-roqR2OD1AhWXTmwGHVGFCIAQ2ZgBCBU">
          <Text>ગુજરાતી</Text>
        </Link>
        <Link href="https://www.google.co.in/setprefs?sig=0_eQx7deOLBubo2lhAtouT3N0__7w%3D&amp;hl=kn&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwj-roqR2OD1AhWXTmwGHVGFCIAQ2ZgBCBY">
          <Text>ಕನ್ನಡ</Text>
        </Link>
        <Link href="https://www.google.co.in/setprefs?sig=0_eQx7deOLBubo2lhAtouT3N0__7w%3D&amp;hl=ml&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwj-roqR2OD1AhWXTmwGHVGFCIAQ2ZgBCBc">
          <Text>മലയാളം</Text>
        </Link>
        <Link href="https://www.google.co.in/setprefs?sig=0_eQx7deOLBubo2lhAtouT3N0__7w%3D&amp;hl=pa&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwj-roqR2OD1AhWXTmwGHVGFCIAQ2ZgBCBg">
          <Text>ਪੰਜਾਬੀ</Text>
        </Link>
      </Div3>
    </HeroWrapper>
  )
}
