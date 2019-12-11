/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui/index"
import { Styled } from "theme-ui"
import "./style.css"
import Footer from "./footer"

import Header from "./header"
import "./layout.css"
import Hero from "../components/image"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Styled.root>
        <ThemeProvider theme={theme}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            sx={{ height: ["300px", "400px", "600px"], marginBottom: "2rem" }}
          >
            <Hero />
          </div>
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 1180,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <main>{children}</main>
          </div>
          <Footer />
        </ThemeProvider>
      </Styled.root>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
