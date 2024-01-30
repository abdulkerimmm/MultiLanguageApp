import React, { useState } from "react";
import "./header.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const [t, i18n] = useTranslation("global");
  const turkishLanguageHandler = () => {
    i18n.changeLanguage("tr");
  };
  const englishLanguageHandler = () => {
    i18n.changeLanguage("en");
  };
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#anasayfa">{t("headers.message1")}</a>
          </li>
          <li>
            <a href="#hakkimizda">{t("headers.message2")}</a>
          </li>
          <li>
            <a href="#hizmetler">{t("headers.message3")}</a>
          </li>
          <li>
            <a href="#randevu">{t("headers.message4")}</a>
          </li>
          <li>
            <a href="#iletisim">{t("headers.message5")}</a>
          </li>
        </ul>
      </nav>
      <div className="language-selector">
        <button id="language-button" onClick={toggleDropdown}>
          {t("headers.message6")}
        </button>
        {showDropdown && (
          <div id="language-dropdown">
            <button onClick={turkishLanguageHandler}>
              {t("headers.message7")}
            </button>
            <button onClick={englishLanguageHandler}>
              {t("headers.message8")}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
