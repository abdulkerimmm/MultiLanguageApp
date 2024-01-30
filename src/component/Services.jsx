import React from "react";
import "./services.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Services = () => {
  const [t, i18n] = useTranslation("global");
  const service1 =
    "https://www.design1.com/wp-content/uploads/2023/05/men-hair-cut-services-grand-rapids.jpg";

  const service2 =
    "https://topfranchise.com/upload/resize_cache/webp/upload/medialibrary/578/578243fffe68d7739912fc12261cceb6.webp";
  const service3 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvH8ebKsSWnZ0VXzwgTAiWLUOQSrluze131g&usqp=CAU";
  return (
    <section id="hizmetler" className="services">
      <h2>{t("Services.message1")}</h2>
      <div className="service">
        <img src={service1} alt="Hizmet 1" />
        <h3>{t("Services.message2")}</h3>
        <p>{t("Services.message3")}</p>
        <NavLink to="/BookAppointment">
          <button class="learn-more">{t("Services.message4")}</button>
        </NavLink>
      </div>
      <div className="service">
        <img src={service2} alt="Hizmet 2" />
        <h3>{t("Services.message5")}</h3>
        <p>{t("Services.message6")}</p>
        <NavLink to="/BookAppointment">
          <button class="learn-more">{t("Services.message7")}</button>
        </NavLink>
      </div>
      <div className="service">
        <img src={service3} alt="Hizmet 3" />
        <h3>{t("Services.message8")}</h3>
        <p>{t("Services.message9")}</p>
        <NavLink to="/BookAppointment">
          <button class="learn-more">{t("Services.message10")}</button>
        </NavLink>
      </div>
    </section>
  );
};

export default Services;
