import React from "react";
import "../../styles/about.css";
import aboutImg from "../../images/about-us.jpg";

const chooseData = [
  {
    icon: "ri-pen-nib-line",
    title: "Primeira etapa do processo",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "ri-time-line",
    title: "Velocidade na análise do processo",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "ri-user-5-line",
    title: "Satisfação dos clientes",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__content">
            <h6 className="subtitle">Porque nos escolher</h6>
            <h2>Especialistas em auxiliar pessoas</h2>
            <h2 className="highlight">em seus processos</h2>
            <p className="description about__content-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              suscipit corporis sint. Non nulla voluptatum, voluptatibus
              praesentium neque quis exercitationem ullam odit, possimus
              consequuntur reiciendis culpa ducimus temporibus eum itaque.
            </p>

            {chooseData.map((item, index) => (
              <div className="choose__us-item" key={index}>
                <span className="choose__us-icon">
                  <i className={item.icon}></i>
                </span>

                <div>
                  <h4 className="choose__us-title">{item.title}</h4>
                  <div className="description">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="about__img">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
