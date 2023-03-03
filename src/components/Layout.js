import React from "react"
import 'normalize.css'
import GlobalStyles from "../styles/GlobalStyles"
import Typography from "../styles/Typography"
import Footer from "./Footer"
import Navbar from "./Navbar"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import Sidebar from "./Sidebar"

const LayoutStyles = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100dvh;
`;

const SiteContainerStyles = styled.div`
  max-width: 1000px;
  margin: 4rem auto;
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  border: 5px solid white;
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

export default function Layout({ children }) {
  return (<>
<Helmet>
<link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"></link>
</Helmet>
    <GlobalStyles />
    <Typography />
    <LayoutStyles>
    <Navbar />
    <Sidebar />
    <SiteContainerStyles>
      <main id="main" className='main-content'>
        {children}
      </main>
    </SiteContainerStyles>
    <Footer />
    </LayoutStyles>
  </>
  )
}