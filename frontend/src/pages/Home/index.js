import React from "react";

import Header from "../../components/Header";

import sickIcon from "../../assets/home/sick-man.svg";
import recoveredIcon from "../../assets/home/recovered-man.svg";
import deadIcon from "../../assets/home/dead-man.svg";

import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <Header />

      <div className="selection">
        <select name="country" id="country">
          <option value="0">Todos países</option>
        </select>
        <select name="state" id="state">
          <option value="0">-</option>
        </select>
      </div>

      <section className="cases-container">
        <div className="cases">
          <div style={{ backgroundColor: "#ffaa5c" }} className="cases-number">
            3.725.801
          </div>
          <div style={{ color: "#ffaa5c" }} className="cases-text">
            Confirmados
          </div>
          <div className="confirmed-image-container">
            <img src={sickIcon} alt="Sick Man" className="confirmed-image" />
          </div>
        </div>

        <div className="cases">
          <div style={{ backgroundColor: "#5FC68F" }} className="cases-number">
            1.241.773
          </div>
          <div style={{ color: "#5FC68F" }} className="cases-text">
            Recuperados
          </div>
          <div className="recovered-image-container">
            <img
              src={recoveredIcon}
              alt="Recovered Man"
              className="recovered-image"
            />
          </div>
        </div>

        <div className="cases">
          <div style={{ backgroundColor: "#DD5555" }} className="cases-number">
            258.272
          </div>
          <div style={{ color: "#DD5555" }} className="cases-text">
            Mortos
          </div>
          <div className="dead-image-container">
            <img src={deadIcon} alt="Dead Man" className="dead-image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
