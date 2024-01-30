import React from "react";
import "./services.css";
import { useTranslation } from "react-i18next";

const Services = ({ onToggleBookAppointment }) => {
  const [t, i18n] = useTranslation("global");
  const service1 =
    "https://images.squarespace-cdn.com/content/v1/5384c4e9e4b0b3a648f16913/1504810984000-JAJQQ7WVIOE98PU3CLUW/1P2A6744-2.jpg";

  const service2 =
    "https://topfranchise.com/upload/resize_cache/webp/upload/medialibrary/578/578243fffe68d7739912fc12261cceb6.webp";
  const service3 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvH8ebKsSWnZ0VXzwgTAiWLUOQSrluze131g&usqp=CAU";
  return (
    <section id="hizmetler" className="services">
      <h2>{t("Services.message1")}</h2>
      <div className="service">
        <img style={{ width: "600px" }} src={service1} alt="Hizmet 1" />
        <h3>{t("Services.message2")}</h3>
        <p>{t("Services.message3")}</p>

        <button onClick={onToggleBookAppointment} class="learn-more">
          {t("Services.message4")}
        </button>
      </div>
      <div className="service">
        <img src={service2} alt="Hizmet 2" />
        <h3>{t("Services.message5")}</h3>
        <p>{t("Services.message6")}</p>

        <button onClick={onToggleBookAppointment} class="learn-more">
          {t("Services.message7")}
        </button>
      </div>
      <div className="service">
        <img style={{ width: "300px" }} src={service3} alt="Hizmet 3" />
        <h3>{t("Services.message8")}</h3>
        <p>{t("Services.message9")}</p>

        <button onClick={onToggleBookAppointment} class="learn-more">
          {t("Services.message10")}
        </button>
      </div>
    </section>
  );
};

export default Services;
