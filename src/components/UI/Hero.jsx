import React from "react";
import "../../styles/hero.css";
import heroDarkImg from "../../images/hero-img.png";

const Hero = () => {
  return (
    <section className="hero__section">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div>
              <h2>Nenhum caso é</h2>
              <h2 className="highlight">impossível</h2>
              <h2>quando se tem a nós!</h2>
            </div>

            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              quam? Non expedita vel totam.
            </p>

            <div className="hero__btns">
              <button className="primary__btn">Entre em contato agora!</button>
              <button className="secondary__btn">Saiba mais!</button>
            </div>
          </div>

          <div className="hero__img">
            <img src={heroDarkImg} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
