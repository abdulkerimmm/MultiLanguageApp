import axios from "axios";
import "./App.css";
import Header from "./component/Header";
import MainPage from "./component/MainPage";
import Services from "./component/Services";
import Appointment from "./component/Appointment";
import Reviews from "./component/Reviews";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BookAppointment from "./component/BookAppointment";

function App() {
  const [showBookAppointment, setShowBookAppointment] = useState(false);
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get("/ip-api/json");
        const data = response.data;
        const location = data.countryCode === "TR" ? "tr" : "en"; // Ülke koduna göre dil seçimi
        location === "tr"
          ? i18n.changeLanguage("tr")
          : i18n.changeLanguage("en");
        console.log("data.countryCode:", data.countryCode);
      } catch (error) {
        console.error("IP lokasyonunu alırken hata oluştu:", error);
      }
    };

    // Kullanıcının IP lokasyonunu
    fetchLocation();
  }, []);

  const handleToggleBookAppointment = () => {
    setShowBookAppointment(!showBookAppointment);
  };

  return (
    <div className="App">
      {showBookAppointment ? (
        <BookAppointment
          onToggleBookAppointment={handleToggleBookAppointment}
        />
      ) : (
        <>
          <Header />
          <MainPage />
          <Services onToggleBookAppointment={handleToggleBookAppointment} />
          <Appointment onToggleBookAppointment={handleToggleBookAppointment} />
          <Reviews />
          <About />
          <Contact onToggleBookAppointment={handleToggleBookAppointment} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
