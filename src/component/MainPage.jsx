import React from "react";
import "./mainPage.css";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <section id="anasayfa" className="hero">
      <div className="hero-content">
        <h1>{t("MainPage.message1")}</h1>
        <p>{t("MainPage.message2")}</p>
        <a href="#randevu" className="cta-button">
          {t("MainPage.message3")}
        </a>
      </div>
    </section>
  );
};

export default MainPage;
