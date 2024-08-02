import React from "react";
import "../../styles/services.css";

const serviceData = [
  {
    icon: "ri-scales-line",
    title: "Balança",
    desc: "Lorem ipsum dolor sit amet elit. Explicabo tenetur a nulla molestiae non at fugit. Rem inventore sed.",
  },
  {
    icon: "ri-auction-line",
    title: "Martelo",
    desc: "Lorem ipsum dolor sit amet elit. Explicabo tenetur a nulla molestiae non at fugit. Rem inventore sed.",
  },
  {
    icon: "ri-team-line",
    title: "Time",
    desc: "Lorem ipsum dolor sit amet elit. Explicabo tenetur a nulla molestiae non at fugit. Rem inventore sed.",
  },
  {
    icon: "ri-government-line",
    title: "Tribunal",
    desc: "Lorem ipsum dolor sit amet elit. Explicabo tenetur a nulla molestiae non at fugit. Rem inventore sed.",
  },
];

const Services = () => {
  return (
    <section id="service">
      <div className="container">
        <div className="service__top-content">
          <h6 className="subtitle">Nossos Serviços</h6>
          <h2>Oferecemos sempre o nosso</h2>
          <h2 className="highlight">melhor atendimento!</h2>
        </div>
        <div className="service__item-wrapper">
          {serviceData.map((item, index) => (
            <div className="services__item" key={index}>
              <span className="service__icon">
                <i className={item.icon}></i>
              </span>
              <h3 className="service__title">{item.title}</h3>
              <p className="description">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
