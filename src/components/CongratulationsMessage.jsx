import React from "react";
import s from "./style.module.scss";
import img from "../assets/congratulations.png";
function CongratulationsMessage(props) {
  return (
    <div className={s.congratulation}>
      <img src={img} alt="Congratulations" />
      <h1>Congratulations you will receive your prize soon</h1>
    </div>
  );
}

export default CongratulationsMessage;
