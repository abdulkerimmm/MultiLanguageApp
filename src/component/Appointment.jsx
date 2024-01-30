import React from "react";
import "./appointment.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Appointment = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section id="randevu" className="appointment">
      <h2>{t("Appointment.message1")}</h2>
      <p>{t("Appointment.message2")}</p>
      <NavLink to="/BookAppointment">
        <button className="appointment-button">
          {t("Appointment.message3")}
        </button>
      </NavLink>
    </section>
  );
};

export default Appointment;

// "homepage": "https://abdulkerimmm.github.io/MultiLanguage_App/",

// "predeploy": "npm run build",
// "deploy": "gh-pages -d dist",
