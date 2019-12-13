/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
// eslint-disable-next-line
import React from "react"
import Logo from "../images/logo.svg"
import Facebook from "../images/s_facebook.svg"

const Header = () => (
  <header
    style={{
      background: `#fff`,
      position: "sticky",
      top: "0",
      zIndex: "1000",
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1180,
        padding: `1rem 1.0875rem`,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Link
        to="/"
        style={{
          color: `#282828`,
          textDecoration: `none`,
          margin: "0",
          height: "2.4rem",
          padding: "0",
        }}
      >
        <Logo
          style={{ width: "2.4rem", height: "100%", marginRight: "0.5rem" }}
        />
      </Link>
      <div style={{ display: "inline-block", height: "100%" }}>
        <h2
          sx={{
            fontFamily: "OldSport!important",
            margin: "auto",
            paddingTop: "6px",
          }}
        >
          Metalheart
        </h2>
      </div>
      <a
        href="https://www.facebook.com/metalheart.krolismok/"
        sx={{ marginLeft: "auto", width: "1.5rem" }}
      >
        <Facebook />
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
