import HeaderWithConnect from './header'
import Footer from './footer'
import styled from "styled-components"

const Main = styled.main`
margin-top: 150px;
width: 100%;
`
export default function Layout({ children }) {
    return (
      <>
        <HeaderWithConnect />
        <Main>{children}</Main>
        <Footer />
      </>
    )
  }