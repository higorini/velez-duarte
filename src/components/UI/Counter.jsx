import React from "react";
import "../../styles/counter.css";

const counterData = [
  {
    number: 500,
    text: "Clientes",
  },
  {
    number: "1000+",
    text: "Casos resolvidos",
  },
  {
    number: 333,
    text: "Alguma coisa mais",
  },
  {
    number: 1234,
    text: "Outra coisa ainda mais",
  },
];

const Counter = () => {
  return (
    <section className="counter" id="projects">
      <div className="container">
        <div className="counter__wrapper">
          {counterData.map((item, index) => (
            <div className="counter__item" key={index}>
              <div className="counter__number">{item.number}</div>
              <div className="counter__title">{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
