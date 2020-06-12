import React from "react";

import Logo from "../../components/Logo";
import { Link } from "react-router-dom";

import "./styles.css";

const Register = () => {
  return (
    <div className="register-container">
      <Link to="/">
        <Logo virusSize={75} covidSize={45} quizSize={31} />
      </Link>
    </div>
  );
};

export default Register;
