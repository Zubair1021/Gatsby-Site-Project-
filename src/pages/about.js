import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const AboutPage = () => (
  <>
    <Helmet>
      <title>About Us</title>
      <meta name="description" content="About us page" />
    </Helmet>
    <main>
      <h1>About Us</h1>
      <p>This is the about page of our Gatsby site.</p>
      <b><i>Developed by Muhammad Zubair</i></b><br />
      <Link to="/">Return to Home</Link>
    </main>
  </>
)

export default AboutPage
