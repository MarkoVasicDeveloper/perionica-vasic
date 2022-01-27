import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import AdministratorDashboard from "./Component/Administrator/AdministratorDashboard/AdministratorDashboard";
import AdministratroLogin from "./Component/Administrator/AdministratorLogin/AdministratorLogin";
import CarpetWashingPage from "./Component/CarpetWashing/CarpetWashingPage";
import ContactPage from "./Component/Contact/ContactPage";
import DeepWashingPage from "./Component/DeepWashing/DeepWashingPage";
import GaleryPage from "./Component/Galery/GaleryPage";
import HomePage from "./Component/Home/HomePage";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pranje-tepiha" element={<CarpetWashingPage />} />
        <Route path="/dubinsko-pranje" element={<DeepWashingPage />} />
        <Route path="/galerija" element={<GaleryPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route
          path="/administratorDashboard"
          element={<AdministratorDashboard />}
        />
        <Route path="/administratorLogin" element={<AdministratroLogin />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
