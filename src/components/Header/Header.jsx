import React, { useRef, useEffect } from "react";
import "./header.css";

const nav__links = [
  {
    path: "#hero",
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
  const headerRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("header__shrink");
    } else {
      headerRef.current.classList.remove("header__shrink");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          <div className="logo">
            <h2>Velez & Duarte</h2>
          </div>

          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li className="menu__item" key={index}>
                  <a
                    href={item.path}
                    onClick={handleClick}
                    className="menu__link"
                  >
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
