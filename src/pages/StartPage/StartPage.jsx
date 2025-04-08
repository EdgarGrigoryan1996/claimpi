import React from "react";
import logo from "../../assets/Pi-Network.png";
import s from "./StartPage.module.scss";
import LastAirdrop from "./LastAirdrop.jsx";
import Steps from "./Steps.jsx";
import HowItWorks from "./HowItWorks.jsx";
import Download from "./Download.jsx";
import Footer from "./Footer.jsx";
function StartPage() {
  return (
    <div>
      <LastAirdrop />
      <Steps />
      <HowItWorks />
      <Download />
      <Footer />
    </div>
  );
}

export default StartPage;
