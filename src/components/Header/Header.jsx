import React from "react";
import "./header.css";

const nav__links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: "#about",
    display: "Sobre",
  },
  {
    path: "#service",
    display: "Serviços",
  },
  {
    path: "#projects",
    display: "Projetos",
  },
];

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <h2>Velez & Duarte</h2>
          </div>

          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li className="menu__item" key={index}>
                  <a href={item.path} className="menu__link">
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="light__mode">
            <span onClick={toggleTheme}>
              {theme === "light-theme" ? (
                <span>
                  <i className="ri-moon-line"></i>Escuro
                </span>
              ) : (
                <span>
                  <i className="ri-sun-line"></i>Claro
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
