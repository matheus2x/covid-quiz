"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "tips",
      [
        {
          image: "instrument.svg",
          text: "Que tal usar o tempo livre para aprender um novo instrumento?",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image: "lotus-position.svg",
          text: "Cuidado com ansiedade! Por que não meditar?",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image: "mask.svg",
          text:
            "Se sair, não esqueça de vestir uma máscara descartável ou de tecido.",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image: "no-handshake.svg",
          text: "Evite ao máximo qualquer contato físico direto.",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image: "reading.svg",
          text: "Leia um bom livro.",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image: "travel.svg",
          text: "Evite e se possível, cancele todas suas viagens.",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image: "wash-hands.svg",
          text:
            "Lave as mãos por cerca de 20 segundos, com água e sabão, após tocar em superfícies e animais.",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          image: "watching-tv.svg",
          text: "Aproveite para colocar suas séries favoritas em dia!",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tips", null, {});
  },
};
