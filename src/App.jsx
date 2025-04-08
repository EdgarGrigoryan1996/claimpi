import "./App.css";
import s from "./components/style.module.scss";
import ss from "./pages/StartPage/StartPage.module.scss";
import Header from "./components/Header.jsx";
import ClaimPi from "./components/ClaimPi.jsx";
import React, { useState } from "react";
import CongratulationsMessage from "./components/CongratulationsMessage.jsx";
import Footer from "./components/Footer.jsx";
import StartPage from "./pages/StartPage/StartPage.jsx";
import Claim from "./pages/Claim/Claim.jsx";
import { Link, Route, Routes } from "react-router";
import logo from "./assets/Pi-Network.png";

function App() {
  // const [congratulation, setCongratulation] = useState(false);
  return (
    <div className={s.container}>
      <header className={ss.header}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </header>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/claim" element={<Claim />} />
      </Routes>

      {/*{congratulation ? (*/}
      {/*  <CongratulationsMessage />*/}
      {/*) : (*/}
      {/*  <>*/}
      {/*    <Header />*/}
      {/*    <ClaimPi setCongratulation={setCongratulation} />*/}
      {/*    <Footer />*/}
      {/*  </>*/}
      {/*)}*/}
    </div>
  );
}

export default App;
