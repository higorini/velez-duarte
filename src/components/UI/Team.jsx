import React from "react";
import "../../styles/team.css";
import team01 from "../../images/team-02.png";

const teamData = [
  {
    name: "Raquel Velez",
    position: "Advogada Criminal",
    img: team01,
    social: {
      linkedin: "https://random.dog/",
      instagram: "https://random.dog/",
      whatsapp: "https://random.dog/",
    },
  },
  {
    name: "Rita Duarte",
    position: "Advogada Familiar",
    img: team01,
    social: {
      linkedin: "https://random.dog/",
      instagram: "https://random.dog/",
      whatsapp: "https://random.dog/",
    },
  },
  {
    name: "Ana Duarte",
    position: "Advogada Empresarial",
    img: team01,
    social: {
      linkedin: "https://random.dog/",
      instagram: "https://random.dog/",
      whatsapp: "https://random.dog/",
    },
  },
];

const Team = () => {
  return (
    <section className="our__team">
      <div className="container">
        <div className="team__content">
          <h6 className="subtitle">Nosso time</h6>
          <h2>
            Conheça <span className="highlight">nosso time!</span>
          </h2>
        </div>

        <div className="team__wrapper">
          {teamData.map((item, index) => (
            <div className="team__item" key={index}>
              <div className="team__img">
                <img src={item.img} alt="" />
              </div>

              <div className="team__details">
                <h4>{item.name}</h4>
                <p className="description">{item.position}</p>

                <div className="team__member-social">
                  <span>
                    <i className="ri-linkedin-line">
                      <a
                        href={item.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      ></a>
                    </i>
                  </span>
                  <span>
                    <i className="ri-instagram-line">
                      <a
                        href={item.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      ></a>
                    </i>
                  </span>
                  <span>
                    <i className="ri-whatsapp-line">
                      <a
                        href={item.social.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                      ></a>
                    </i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
