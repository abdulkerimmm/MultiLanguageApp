import React from "react";
import "./contact.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Contact = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <section id="iletisim" className="contact">
      <h2>{t("Contact.message1")}</h2>
      <p>{t("Contact.message2")}</p>
      <ul>
        <li>{t("Contact.message3")}</li>
        <li>{t("Contact.message4")}</li>
        <li>{t("Contact.message5")}</li>
      </ul>
      <NavLink to="/BookAppointment">
        <button className="contact-button">{t("Contact.message6")}</button>
      </NavLink>
    </section>
  );
};

export default Contact;
