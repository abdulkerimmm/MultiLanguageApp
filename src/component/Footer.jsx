import React from "react";
import "./footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t, i18n] = useTranslation("global");
  const logo =
    "data:image/png;base64,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";
  const facebook =
    "data:image/png;base64,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";
  const tiwitter =
    "data:image/jpeg;base64,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";
  const Instegram =
    "data:image/jpeg;base64,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";
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Salonium Logo" />
          <h4>{t("Footer.message1")}</h4>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="#anasayfa">{t("Footer.message2")}</a>
            </li>
            <li>
              <a href="#hakkimizda">{t("Footer.message3")}</a>
            </li>
            <li>
              <a href="#hizmetler">{t("Footer.message4")}</a>
            </li>
            <li>
              <a href="#randevu">{t("Footer.message5")}</a>
            </li>
            <li>
              <a href="#iletisim">{t("Footer.message6")}</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>{t("Footer.message7")}</h4>
          <a href="#">
            <i className="fab fa-facebook-f">
              <img src={facebook} alt="Facebook" width="40" height="40" />
            </i>
          </a>
          <a href="#">
            <i className="fab fa-twitter">
              <img src={tiwitter} alt="tiwitter" width="40" height="40" />
            </i>
          </a>
          <a href="#">
            <i className="fab fa-instagram">
              <img src={Instegram} alt="instegraam" width="40" height="40" />
            </i>
          </a>
        </div>
      </div>
      <div className="footer-extra">
        <p>{t("Footer.message8")}</p>
        <p>{t("Footer.message9")}</p>
      </div>
    </footer>
  );
};

export default Footer;