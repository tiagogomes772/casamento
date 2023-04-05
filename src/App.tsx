import { useState } from "react";
import banner from "./assets/banner.jpg";
import convite from "./assets/convite.png";

function App() {
  return (
    <div>
      <header>
        <h1>Casamento da Diana e do Tiago</h1>
      </header>

      <main>
        <img src={banner} alt="Casamento da Diana e do Tiago" />

        <div className="introduction-section">
          <p>
            Sejam bem-vindos ao nosso site de casamento! Estamos muito felizes
            em compartilhar este momento especial com todos vocês. Este site foi
            criado para ajudá-los a obter todas as informações que precisam para
            aproveitar ao máximo o nosso grande dia.
          </p>
          <p>
            Nós não poderíamos estar mais animados para compartilhar este
            momento com amigos e familiares queridos. Esperamos que vocês
            encontrem todas as informações que precisam aqui, desde os detalhes
            da cerimônia até as informações sobre hospedagem.
          </p>
          <p>
            O nosso objetivo é tornar este dia incrível não apenas para nós, mas
            também para cada um de vocês. Obrigado por fazer parte deste momento
            e por nos ajudar a criar memórias que durarão para sempre.
          </p>
        </div>
        <div className="section-invite">
          <img src={convite} alt="Convite do casamento" />
        </div>

        
      </main>
    </div>
  );
}

export default App;
