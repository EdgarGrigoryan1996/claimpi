import React from "react";
import s from "./StartPage.module.scss";
import Button from "../../components/Button.jsx";
import airdropImg from "../../assets/airdrop.png";
import { Link } from "react-router";
function LastAirdrop() {
  return (
    <div className={s.lastAirdrop}>
      <div className={s.content}>
        <h2>
          Pi Network <span>Last</span> Airdrop{" "}
        </h2>
        <p>
          The official Pi Network’s Twitter followers have exceeded 2 pioneers!
          And in order to get closer to the mainnet and activate and attract
          more pioneers, a total of 518π/pioneer prizes will be awarded to
          pioneers who successfully complete KYC. will hold an airdrop. The
          future is very exciting as the Pi community continues to build the
          Web3 Pi ecosystem full of amazing apps and utilities on top of the Pi
          browser. Get the job done right, do everything.{" "}
        </p>
        <Link to={"/claim"}>
          <Button title="Claim Now" bg="#61357E" color="#fff" />
        </Link>
      </div>
      <div className={s.imageBlock}>
        <img src={airdropImg} alt="Airdrop" />
      </div>
    </div>
  );
}

export default LastAirdrop;
