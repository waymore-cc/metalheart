/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React from "react"
import Krolismok from "../images/krolismok.svg"

const Header = () => (
  <>
    <div style={{ borderTop: "1px solid #c3c3c3", padding: "1rem 0 1rem 0" }}>
      <div
        sx={{
          display: "flex",
          maxWidth: "1180px",
          margin: "auto",
          padding: "1rem 1rem",
          flexDirection: ["column", "row", "row"],
        }}
      >
        <div
          sx={{
            flex: ["0 0 100%", "0 0 100%", "0 0 25%"],
            display: "flex",
            padding: ["1rem 0 1rem 0", 0, 0],
          }}
        >
          <Krolismok
            sx={{ height: "80px", margin: ["auto", "none", "none"] }}
          />
        </div>
        <div
          sx={{
            flex: ["0 0 100%", "0 0 100%", "0 0 50%"],
            padding: ["1rem 0 1rem 0", 0, 0],
          }}
        >
          Nr konta: PKO BP 21 1020 5242 0000 2102 0324 1874 <br />
          SWIFT{"("}BIC{")"}: BPKOPLPW <br />
          IBAN: PL21 1020 5242 0000 2102 0324 1874
        </div>

        <div sx={{ flex: ["0 0 100%", "0 0 100%", "0 0 26%"] }}>
          NIP: 8961536680 <br />
          KRS: 0000496316 <br />
          REGON: 02234405300000
        </div>
      </div>
    </div>
    <footer style={{ width: "100%" }}>
      <div
        style={{
          margin: `0 auto`,
          padding: `0.5rem 0`,
          display: "flex",
          borderTop: "1px solid #c3c3c3",
        }}
      >
        <div style={{ maxWidth: 1180, margin: "auto" }}>
          Copyright © {new Date().getFullYear()} ·
          <a href="https://www.gatsbyjs.org" style={{ padding: "0 0.3rem" }}>
            Fundacja Król i Smok
          </a>
        </div>
      </div>
    </footer>
  </>
)

export default Header
