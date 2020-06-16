import React from "react";

import Logo from "../../components/Logo";
import { Link } from "react-router-dom";

import "./styles.css";

const Register = () => {
  return (
    <div className="register-container">
      <header className="register-header">
        <Link to="/">
          <Logo virusSize={75} covidSize={45} quizSize={31} />
        </Link>
        <h1 className="register">Cadastro</h1>
      </header>

      <form className="form-locale">
        <div className="select-group">
          <select name="country" id="country">
            <option value="0">País</option>
          </select>
          <select name="state" id="state">
            <option value="0">Estado ou Província</option>
          </select>
        </div>

        <div className="button-group">
          <Link to="/login">
            <button type="reset">Cancelar</button>
          </Link>
          <button type="submit">Avançar</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
