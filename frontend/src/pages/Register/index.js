import React, { useState, useEffect } from "react";

import Logo from "../../components/Logo";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

import "./styles.css";

const Register = () => {
  const [countries, setCountries] = useState([{ id: 1, name: "Angola" }]);
  const [states, setStates] = useState([{}]);

  const [selectedCountry, setSelectedCountry] = useState("0");
  const [selectedState, setSelectedState] = useState("0");

  const [stateID, setstateID] = useState("0");

  const history = useHistory();

  useEffect(() => {
    api.get("/countries").then((response) => {
      const countriesData = response.data.map((country) => ({
        id: country.id,
        name: country.name,
      }));

      setCountries(countriesData);
    });
  }, []);

  useEffect(() => {
    if (selectedCountry === "0") {
      return;
    }

    api.get(`/countries/${selectedCountry}/states`).then((response) => {
      const statesData = response.data.map((state) => ({
        id: state.id,
        name: state.name,
      }));

      setStates(statesData);
    });
  }, [selectedCountry]);

  function handleSelectCountry(event) {
    const country = event.target.value;

    console.log(country);
    // setSelectedCountry(country);
  }

  function handleSelectState(event) {
    const state = event.target.value;

    console.log(state);
    setSelectedState(state);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const state_id = stateID;
    console.log(selectedState);

    history.push(`/register/${state_id}/users`);
  }

  async function handleReset() {
    return history.push("/login");
  }

  return (
    <div className="register-container">
      <header className="register-header">
        <Logo virusSize={75} covidSize={45} quizSize={31} />

        <h1 className="register">Cadastro</h1>
      </header>

      <form
        onSubmit={handleSubmit}
        onReset={handleReset}
        className="form-locale"
      >
        <div className="select-group">
          <select onChange={handleSelectCountry} name="country" id="country">
            <option value="0">País</option>
            {countries.map((country) => (
              <option
                style={{ color: "#000" }}
                key={country.id}
                value={country.name}
              >
                {country.name}
                {() => setSelectedCountry(country.id)}
                {console.log(country.id)}
              </option>
            ))}
          </select>
          <select onChange={handleSelectState} name="state" id="state">
            <option value="0">Estado ou Província</option>
            {states.map((state) => (
              <option
                style={{ color: "#000" }}
                key={state.id}
                value={state.name}
                id={state.id}
              >
                {state.name}
                {() => setstateID(state.id)}
              </option>
            ))}
          </select>
        </div>

        <div className="button-group">
          <button type="reset">Cancelar</button>
          <button type="submit">Avançar</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
