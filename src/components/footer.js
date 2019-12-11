import React from "react"

const Header = () => (
  <>
    <div
      style={{
        display: "flex",
        maxWidth: "1180px",
        margin: "auto",
        padding: "1rem 1rem",
      }}
    >
      <div style={{ flex: "1 1 50%" }}>
        <h3>Kontakt</h3>
        <p>
          Paweł Frankiewicz <br />
          536711733 <br />
          pawel.frankiewicz@krolismok.pl
        </p>
      </div>
      <div style={{ flex: "1 1 50%" }}>
        <h3>Fundacja Król i Smok</h3>
        NIP: 8961536680 <br />
        KRS: 0000496316 <br />
        Nr konta: PKO BP 21 1020 5242 0000 2102 0324 1874
        <br />
      </div>
    </div>
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
  </>
)

export default Header