import React from "react";

import "./styles.css";

import virus from "../../assets/virus.png";

function Logo({ virusSize, covidSize, quizSize }) {
  return (
    <div className="logo">
      <img src={virus} width={virusSize} alt="Virus"></img>
      <h1 style={{ fontSize: covidSize }} className="logo-name">
        COVID-19
      </h1>
      <span style={{ fontSize: quizSize }} className="logo-quiz">
        QUIZ
      </span>
    </div>
  );
}

export default Logo;
