import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Session = ({ logged = false, username = "usuario" }) => {
  const [isLogged, setIsLogged] = useState(logged);

  function handleLogged() {
    localStorage.removeItem("logged-user-status");
    localStorage.removeItem("username");

    setIsLogged(false);
  }

  if (isLogged) {
    return (
      <div className="session-container">
        <span className="user">{username}</span>
        <span onClick={handleLogged} className="exit">
          Sair
        </span>
      </div>
    );
  }

  return (
    <Link className="login" to="/login">
      <span>Iniciar Sessão</span>
    </Link>
  );
};

export default Session;
