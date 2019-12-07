/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Metalheart from "../images/metalheart.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Metalheart" />
    <div style={{ display: "flex", padding: "2rem 0 5rem 0" }}>
      <Metalheart style={{ margin: "auto", width: "40%" }} />
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gridGap: "2rem",
        paddingBottom: "400px",
      }}
    >
      <div>
        <h2>Wracamy do gry...</h2>
      </div>
      <div>
        <p>
          Metalheart to projekt z kilkuletnią historią – przez 8 edycji wraz z
          ekipą Ciemnej Strony Miasta łączyliśmy naszą miłość do muzyki z chęcią
          pomagania podopiecznym fundacji Król i Smok. Po ponad dwuletniej
          przerwie Metalheart powrócił, tym razem przy współpracy z klubem D.K.
          Luksus.
        </p>
      </div>
    </div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gridGap: "2rem",
      }}
    >
      <div></div>
      <div></div>
    </div>
  </Layout>
)

export default IndexPage
