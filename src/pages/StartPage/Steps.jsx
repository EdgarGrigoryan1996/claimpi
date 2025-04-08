import React from "react";
import s from "./StartPage.module.scss";
import { CiGift, CiWallet } from "react-icons/ci";
import { FaBarcode } from "react-icons/fa";
function Steps() {
  return (
    <div className={s.steps}>
      <div className={s.step1}>
        <CiWallet />
        <p>Unlock Wallet</p>
      </div>
      <div className={s.step2}>
        <FaBarcode />
        <p>Paste your Passphrase</p>
      </div>
      <div className={s.step3}>
        <CiGift />
        <p>Get your Airdrop</p>
      </div>
    </div>
  );
}

export default Steps;
