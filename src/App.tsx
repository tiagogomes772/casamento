import { useState } from "react";
import banner from "./assets/banner.jpg";
import convite from "./assets/convite.png";
import rsvp from "./assets/rsvp.jpg";
import grid1 from "./assets/grid1.jpg";
import grid2 from "./assets/grid2.jpg";
import grid3 from "./assets/grid3.jpg";
import grid4 from "./assets/grid4.jpg";
import grid5 from "./assets/grid5.jpg";
import grid6 from "./assets/grid6.jpg";
import grid7 from "./assets/grid7.jpg";
import "./App.css";
import { PopupButton } from "@typeform/embed-react";

function App() {
  return (
    <div>
      <main>
        <div className="banner_section">
          <div className="banner_section--text">
            <h1>Casamento</h1>
            <h2>27 de maio | 12h30</h2>
          </div>
          <img
            className="banner-img"
            src={banner}
            alt="Casamento da Diana e do Tiago"
          />
        </div>
        <div className="image__section">
          <img className="image__section--img" src={grid1} />
          <img className="image__section--img" src={grid7} />
          <img className="image__section--img grid-row-span-2" src={grid3} />
          <img className="image__section--img" src={grid4} />
          <img className="image__section--img grid-row-span-2" src={grid5} />
          <img className="image__section--img" src={grid6} />
        </div>

        <div className="info__section">
          <PopupButton
            id="HPHgiG4V"
            style={{ fontSize: 20 }}
            className="my-button"
          >
            Confirma a tua presença
          </PopupButton>
        </div>
        <div className="info__section-text">
          <h2>Se tiverem alguma dúvida não hesitem em contactar-nos:</h2>
          <h2>
            Diana: <a href="tel:+351936213007">+351 936 213 007</a>
          </h2>
          <h2>
            Tiago: <a href="tel:+351967793038">+351 967 793 038</a>
          </h2>
          <h2>
            {" "}
            Caso queiram surpreender os noivos e precisem de uma mãozinha,
            contactem:{" "}
          </h2>
          <h2>
            Sofia Rodrigues: <a href="tel:+351938737642">+351 938 737 642</a>
          </h2>
        </div>
        <div className="section-invite">
          <img
            className="banner-img"
            src={convite}
            alt="Convite do casamento"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
