import React from "react";
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
