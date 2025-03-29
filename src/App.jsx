import "./App.css";
import s from "./components/style.module.scss";
import Header from "./components/Header.jsx";
import BackgroundAnimation from "./components/BackgroundAnimation/BackgroundAnimation.jsx";
import ClaimPi from "./components/ClaimPi.jsx";
import { useState } from "react";
import CongratulationsMessage from "./components/CongratulationsMessage.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [congratulation, setCongratulation] = useState(false);
  return (
    <div className={s.background}>
      <BackgroundAnimation />
      <div className={s.container}>
        {congratulation ? (
          <CongratulationsMessage />
        ) : (
          <>
            <Header />
            <ClaimPi setCongratulation={setCongratulation} />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
