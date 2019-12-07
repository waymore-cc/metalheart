import React from "react"

const Header = () => (
  <footer style={{ width: "100vw" }}>
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 0`,
        display: "flex",
        borderTop: "1px solid #c3c3c3",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "auto" }}>
        Copyright © {new Date().getFullYear()} · Metalheart ·
        <a href="https://www.gatsbyjs.org" style={{ padding: "0 0.3rem" }}>
          Fundacja Król i Smok
        </a>
      </div>
    </div>
  </footer>
)

export default Header
