import React, { useState } from "react";
import CongratulationsMessage from "../../components/CongratulationsMessage.jsx";
import Header from "../../components/Header.jsx";
import ClaimPi from "../../components/ClaimPi.jsx";
import Footer from "../../components/Footer.jsx";

function Claim() {
  const [congratulation, setCongratulation] = useState(false);
  return (
    <div>
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
  );
}

export default Claim;
