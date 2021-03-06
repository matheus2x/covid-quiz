import React from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn, FiArrowLeft } from "react-icons/fi";

import axios from "axios";

import "./styles.css";

import uncleSam from "../../assets/login/unclesam.png";
import decals from "../../assets/login/virus-decal.svg";
import Logo from "../../components/Logo";

const Login = () => {
  const history = useHistory();

  async function handleFormSubmit(event) {
    event.preventDefault();

    const username = document.getElementById("login-form")[0].value;
    const password = document.getElementById("login-form")[1].value;

    try {
      const response = await axios.post("http://localhost:3333/sessions", {
        username,
        password,
      });

      const { isLogged } = response.data;

      localStorage.setItem("logged-user-status", isLogged);
      localStorage.setItem("username", username);

      return history.push("/");
    } catch (err) {
      alert("Error: User not registered");
    }
  }

  return (
    <>
      <div id="decals">
        <img id="decal1" src={decals} alt="Virus Decals" />
        <img id="decal2" width="66" src={decals} alt="Virus Decals" />
        <img id="decal3" src={decals} alt="Virus Decals" />
        <img id="decal4" width="116" src={decals} alt="Virus Decals" />
        <img id="decal5" width="50" src={decals} alt="Virus Decals" />
      </div>
      <div className="login-container">
        <div id="stay-home">
          <img src={uncleSam} alt="Uncle Sam" />

          <h2>
            I WANT <span className="red">YOU</span>
          </h2>
          <h3>
            TO STAY <span className="red">HOME</span>
          </h3>
        </div>

        <section className="form">
          <Logo virusSize={75} covidSize={45} quizSize={31} />
          <form id="login-form" onSubmit={handleFormSubmit}>
            <h2>Entrar / Cadastrar</h2>

            <input type="text" placeholder="Usuário" required />
            <input type="password" placeholder="Senha" required />

            <div className="submit-container">
              <Link to="/register">
                <div id="register">
                  <FiLogIn size={13} color="#FFF" />
                  <span>Cadastrar-se</span>
                </div>
              </Link>
              <button type="submit">Entrar</button>
            </div>

            <Link id="go-home" to="/">
              <FiArrowLeft size={16} color="#DD5555" />
              Home
            </Link>
          </form>
        </section>
      </div>
    </>
  );
};

export default Login;
