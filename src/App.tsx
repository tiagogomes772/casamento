import { useState } from "react";
import banner from "./assets/banner.jpg";
import convite from "./assets/convite.png";
import rsvp from "./assets/rsvp.jpg";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import "./App.css";
import { PopupButton } from "@typeform/embed-react";

function App() {
  return (
    <div>
      <main>
        <div className="banner_section">
          <div className="banner_section--text">
            <h1>Casamento</h1>
            <h2>27 de Maio, 2023 | 12:00</h2>
            <PopupButton
              id="HPHgiG4V"
              style={{ fontSize: 20 }}
              className="my-button"
            >
              Confirma a tua presença
            </PopupButton>
          </div>
          <img
            className="banner-img"
            src={banner}
            alt="Casamento da Diana e do Tiago"
          />
        </div>

        <div className="introduction-section">
          <div className="side-by-side">
            <p>
              Sejam bem-vindos ao nosso site de casamento! Estamos muito felizes
              em compartilhar este momento especial com todos vocês. Este site
              foi criado para ajudá-los a obter todas as informações que
              precisam para aproveitar ao máximo o nosso grande dia.
            </p>
            <img src={image1} alt="Casamento da Diana e do Tiago" />
          </div>
          <div className="side-by-side">
            <p>
              Nós não poderíamos estar mais animados para compartilhar este
              momento com amigos e familiares queridos. Esperamos que vocês
              encontrem todas as informações que precisam aqui, desde os
              detalhes da cerimônia até as informações sobre hospedagem.
            </p>
            <img
              className="side-by-side__alternate"
              src={image2}
              alt="Casamento da Diana e do Tiago"
            />
          </div>
          <div className="side-by-side">
            <p>
              O nosso objetivo é tornar este dia incrível não apenas para nós,
              mas também para cada um de vocês. Obrigado por fazer parte deste
              momento e por nos ajudar a criar memórias que durarão para sempre.
            </p>
            <img src={image3} alt="Casamento da Diana e do Tiago" />
          </div>
        </div>
        <div className="section-invite">
          <img
            className="banner-img"
            src={convite}
            alt="Convite do casamento"
          />
        </div>
        <div className="banner_section">
          <div className="banner_section--text_bottom">
            <PopupButton
              id="HPHgiG4V"
              style={{ fontSize: 20 }}
              className="my-button"
            >
              Confirma a tua presença
            </PopupButton>
          </div>
          <img className="banner-img" src={rsvp} alt="RSVP do casamento" />
        </div>
      </main>
    </div>
  );
}

export default App;
