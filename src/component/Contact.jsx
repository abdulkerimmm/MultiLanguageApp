import React from "react";
import "./contact.css";
import { useTranslation } from "react-i18next";

const Contact = ({ onToggleBookAppointment }) => {
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

      <button onClick={onToggleBookAppointment} className="contact-button">
        {t("Contact.message6")}
      </button>
    </section>
  );
};

export default Contact;
