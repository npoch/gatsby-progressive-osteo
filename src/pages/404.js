import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}

export default function NotFoundPage() {
  return (
    <>
    <Seo title={'Page not found'} description={'It seems what you are looking for is not here.'}></Seo>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </>
  )
}