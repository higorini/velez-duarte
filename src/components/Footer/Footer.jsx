import React from "react";
import "./footer.css";

const quickLinks = [
  {
    path: "#",
    display: "Contato",
  },
  {
    path: "#",
    display: "FAQ",
  },
  {
    path: "#",
    display: "Termos e Condições",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <h2>Velez & Duarte</h2>
            <p className="description">Cresça conosco!</p>

            <div className="small__text description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non a
              aspernatur enim. Quisquam officia tempore, rerum aspernatur aut
              exercitationem saepe!
            </div>
          </div>

          <div className="footer__quick-links">
            <h3 className="quick__links-title">Soluções</h3>
            <ul className="quick__links">
              {quickLinks.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__quick-links">
            <h3 className="quick__links-title">Soluções</h3>
            <ul className="quick__links">
              {quickLinks.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__quick-links">
            <h3 className="quick__links-title">Soluções</h3>
            <ul className="quick__links">
              {quickLinks.map((item, index) => (
                <li className="quick__link-item" key={index}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="copyright">
          Copyright © {year}, desenvolvido por Higor M. dos Santos. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
