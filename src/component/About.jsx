import React from "react";
import "./about.css";
import { useTranslation } from "react-i18next";
const team1 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ruMQInU6x-AXR8f7nB8u6sqNHFOYdX8YVg9vK3DUEiolnt0daIupAQmdMWBOf8MnDo0&usqp=CAU";
const team2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpzctMR9cpkyUXGqpSA7E_BLYOM5HsbNkv8Q&usqp=CAU";
const team3 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHAn07wK2z9fwq7ebm_0j_8a5MjAI2ZSc8Jw&usqp=CAU";
const About = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <section id="hakkimizda" className="about">
      <h2>{t("About.message1")}</h2>
      <p>{t("About.message2")}</p>
      <p>{t("About.message3")}</p>
      <div className="team">
        <div className="team-member">
          <img src={team1} alt="Ekip Üyesi 1" />
          <h4>{t("About.message4")}</h4>
        </div>
        <div className="team-member">
          <img src={team2} alt="Ekip Üyesi 2" />
          <h4>{t("About.message5")}</h4>
        </div>
        <div className="team-member">
          <img src={team3} alt="Ekip Üyesi 3" />
          <h4>{t("About.message6")}</h4>
        </div>
      </div>
    </section>
  );
};

export default About;
