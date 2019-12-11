/** @jsx jsx */
import { jsx } from "theme-ui"
// eslint-disable-next-line
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Metalheart from "../images/metalheart.svg"
import Winetu from "../images/winetu.svg"
import Mudride from "../images/mudride.svg"
import Madamme from "../images/madamme.svg"
import DKLuksus from "../images/dkluksus.svg"
import Bard from "../images/s_bard.svg"
import Lacerta from "../images/s_lacerta.svg"
import Egmont from "../images/s_egmont.svg"
import Tabs from "../components/Tabs"

const IndexPage = () => (
  <Layout>
    <SEO title="Metalheart" />
    <div style={{ display: "flex", padding: "2rem 0 6rem 0" }}>
      <Metalheart sx={{ margin: "auto", width: ["80%", "60%", "40%"] }} />
    </div>

    <Tabs>
      <div label="Wydarzenia">
        <div
          sx={{
            display: "grid",
            gridTemplateColumns: ["1fr", "1fr 2fr", "1fr 2fr"],
            gridGap: "2rem",
            padding: " ",
          }}
        >
          <div className="eventDate">
            <h2>MH: Wracamy do gry</h2>
            <h3>09.01.2020 r.</h3>
            <h3>Start: 20:00</h3>
            <h3>D.K. Luksus</h3>
          </div>
          <div>
            <p>
              Od początków istnienia tego projektu miłośnicy ciężkich brzmień
              pomagali dzieciom z zaburzeniami neurologicznymi, często trudnymi
              do zdiagnozowania i jeszcze trudniejszymi do leczenia. Wierzymy w
              Was, dlatego teraz wracamy z podwójną siłą — będziemy działać
              mocniej, głośniej i z jeszcze większą energią!
            </p>
            <p>
              Dochód z wydarzenia zostanie przekazany na pomoc, leczenie i
              rehabilitację podopiecznych fundacji „Król i Smok”. Dodatkowo
              podczas najbliższej edycji postaramy się o pomoc dla jednego z
              nas. 25-letni Maciej Raczkowski to miłośnik ciężkiego brzmienia i
              bywalec poprzednich wydarzeń Metalheart. Nowotwór odebrał mu
              władzę nad ciałem, a bez kosztownej rehabilitacji może już jej
              nigdy nie odzyskać.
            </p>
            <p>
              Mamy więc ogromną nadzieję, że po raz kolejny, wspólnie, będziemy
              mogli narobić trochę hałasu i pokazać jak Metalowe Serca biją
              wspólnie w imię najbardziej potrzebujących!
            </p>
            <a
              href="https://www.facebook.com/events/547247089432560/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="eventButton"> Facebook Event</button>
            </a>
          </div>
        </div>
        <div sx={{ padding: "3rem 0" }}>
          <h2>Zagrają:</h2>
          <div className="whoPlays">
            <div className="logos">
              <a
                href="https://www.facebook.com/winetuniema/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Winetu sx={{ height: ["auto", "50px", "50px"] }} />
              </a>
              <a
                href="https://www.facebook.com/MudrideBand/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mudride sx={{ height: ["auto", "40px", "40px"] }} />
              </a>
              <a
                href="https://www.facebook.com/MadammeBand/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Madamme />
              </a>
            </div>
          </div>
        </div>
        <div sx={{ padding: "2rem 0" }}>
          <h2>Partnerzy:</h2>
          <div className="whoPlays">
            <div className="logos">
              <a
                href="https://www.facebook.com/dkluksus/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DKLuksus />
              </a>
              <a
                href="https://www.facebook.com/pg/wydawnictwobard/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Bard />
              </a>
              <a
                href="https://www.facebook.com/pg/LacertaPL/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Lacerta />
              </a>
              <a
                href="https://www.facebook.com/KrainaPlanszowek/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Egmont />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div label="Metalheart">
        <div
          sx={{
            display: "grid",
            gridTemplateColumns: ["1fr", "1fr 2fr", "1fr 2fr"],
            gridGap: "2rem",
            padding: " ",
          }}
        >
          <div>
            <h2>O nas</h2>
          </div>
          <div>
            <p>
              Metalheart to projekt z kilkuletnią historią – przez 8 edycji wraz
              z ekipą Ciemnej Strony Miasta łączyliśmy naszą miłość do muzyki z
              chęcią pomagania podopiecznym fundacji Król i Smok. Po ponad
              dwuletniej przerwie Metalheart powrócił, tym razem przy współpracy
              z klubem D.K. Luksus.
            </p>
          </div>
        </div>
      </div>
      <div label="Kontakt">
        <div
          sx={{
            display: "grid",
            gridTemplateColumns: ["1fr", "1fr 2fr", "1fr 2fr"],
            gridGap: "2rem",
            padding: " ",
          }}
        >
          <div>
            <h2>Skontaktuj się z nami:</h2>
          </div>
          <div className="kontakt">
            <p style={{ fontWeight: "bold" }}>Paweł Frankiewicz</p>
            <p>+48 536 711 733</p>
            <a href="mailto:pawel.frankiewicz@krolismok.pl">
              <p>pawel.frankiewicz@krolismok.pl</p>
            </a>
            <p>
              <br />
              Jeśli chcesz dołączyć do projektu Metalheart, napisz do nas!
              Zapraszamy do współpracy solistów, zespoły i tych, którzy chcą
              wesprzeć nas w inny sposób – darczyńców, partnerów i
              wolontariuszy.
            </p>
          </div>
        </div>
      </div>
    </Tabs>

    <div
      sx={{
        display: "grid",
        gridTemplateColumns: ["1fr", "1fr 2fr", "1fr 2fr"],
        gridGap: "2rem",
      }}
    >
      <div></div>
      <div></div>
    </div>
  </Layout>
)

export default IndexPage
