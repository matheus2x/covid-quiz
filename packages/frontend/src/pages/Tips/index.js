import React from "react";

import Header from "../../components/Header";

import "./styles.css";

const Tips = () => {
  return (
    <div className="tips-container">
      <Header />

      <section className="section-tip">
        <div className="higher-tip">
          <img
            src="http://localhost:3333/uploads/wash-hands.svg"
            alt="wash hands"
          />
          <span className="tip-text">
            Lave as mãos por cerca de 20 segundos, com água e sabão, após tocar
            em superfícies e animais.
          </span>
        </div>

        <div className="right-tips-container">
          <div className="larger-tip">
            <img
              src="http://localhost:3333/uploads/no-handshake.svg"
              alt="no handshake"
            />
            <span className="tip-text">
              Evite ao máximo qualquer contato físico direto.
            </span>
          </div>

          <div className="comum-tip-container">
            <div className="comum-tip">
              <img
                src="http://localhost:3333/uploads/watching-tv.svg"
                alt="watching tv"
              />
              <span className="tip-text">
                Aproveite para colocar suas séries favoritas em dia!
              </span>
            </div>

            <div className="comum-tip">
              <img
                src="http://localhost:3333/uploads/lotus-position.svg"
                alt="lotus position"
              />
              <span className="tip-text">
                Cuidado com ansiedade! Por que não meditar?
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-tip to-right">
        <div className="right-tips-container">
          <div className="comum-tip-container">
            <div className="comum-tip">
              <img
                src="http://localhost:3333/uploads/travel.svg"
                alt="travel"
              />
              <span className="tip-text">
                Evite e se possível, cancele todas suas viagens.
              </span>
            </div>

            <div className="comum-tip">
              <img
                src="http://localhost:3333/uploads/instrument.svg"
                alt="lotus position"
              />
              <span className="tip-text">
                Que tal usar o tempo livre para aprender um novo instrumento?
              </span>
            </div>
          </div>

          <div className="larger-tip">
            <img
              src="http://localhost:3333/uploads/mask.svg"
              alt="masked man"
            />
            <span className="tip-text">
              Se sair, não esqueça de vestir uma máscara descartável ou de
              tecido.
            </span>
          </div>
        </div>

        <div className="higher-tip">
          <img src="http://localhost:3333/uploads/reading.svg" alt="reading" />
          <span className="tip-text">Leia um bom livro.</span>
        </div>
      </section>
    </div>
  );
};

export default Tips;
