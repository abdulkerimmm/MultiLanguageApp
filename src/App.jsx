import React, { useEffect, useState, useTransition } from "react";
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
import { useTranslation } from "react-i18next";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import BookAppointment from "./component/BookAppointment";

function App() {
  const [t, i18n] = useTranslation("global");
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get("http://ip-api.com/json");
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

  return (
    <div className="App">
      <Header />
      <MainPage />
      <Services />
      <Appointment />
      <Reviews />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
// function Root() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="BookAppointment" element={<BookAppointment />} />
//         {/* Other routes go here */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default Root;
