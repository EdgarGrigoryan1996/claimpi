import React from "react";
import s from "./StartPage.module.scss";
import mobileimage from "../../assets/Pi-Mobile-App.png";
import { MdDone } from "react-icons/md";
import Button from "../../components/Button.jsx";
import { Link } from "react-router";
function HowItWorks() {
  return (
    <div className={s.howItWorks}>
      <div className={s.imageBlock}>
        <img src={mobileimage} alt="Mobile Mining" />
      </div>
      <div className={s.content}>
        <h5>How it works</h5>
        <h2>
          Get <span>Simplify</span> YourPayment Processes
        </h2>
        <p>
          Pi Network prides itself on accessibility and user-friendliness. With
          our intuitive technology, you can effortlessly send and receive
          payments using Pi on your mobile device, making financial transactions
          a breeze
        </p>
        <h4>
          <MdDone color="#61357E" /> Download Application
        </h4>
        <h4>
          <MdDone color="#61357E" /> Create Account
        </h4>
        <h4 className={s.bold}>
          <MdDone color="#61357E" /> Start mining
        </h4>
        <h4 className={s.bold}>
          <MdDone color="#61357E" /> Claim Airdrop
        </h4>

        <Link to={"/claim"}>
          <Button title="Claim Now" bg="#61357E" color="#fff" />
        </Link>
      </div>
    </div>
  );
}

export default HowItWorks;
