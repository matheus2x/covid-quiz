import React from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo";
import Session from "../Session";

import "./styles.css";

const Header = () => {
  const loggedStatus = localStorage.getItem("logged-user-status");
  const username = localStorage.getItem("username");

  return (
    <header className="header">
      <Link to="/">
        <Logo className="logo" virusSize={65} covidSize={38} quizSize={26} />
      </Link>
      <ul>
        <Link className="quizzes-button" to="/quizzes">
          <li>Quizzes</li>
        </Link>
        <Link className="tips-button" to="/tips">
          <li>Dicas</li>
        </Link>
        <Link className="sintomas-button" to="/sintomas">
          <li>Sintomas</li>
        </Link>
      </ul>

      <Session logged={loggedStatus} username={username} />
    </header>
  );
};

export default Header;
