import React from "react";
import s from "./StartPage.module.scss";
import { FaApple, FaGooglePlay } from "react-icons/fa";
function Download() {
  return (
    <div className={s.download}>
      <h2>
        Dont have Pi yet ? It's <br /> <span>Fast & Easy.</span>{" "}
      </h2>
      <p>Download the app here</p>
      <div className={s.markets}>
        <a
          href="https://apps.apple.com/us/app/pi-network/id1445472541"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={s.market}>
            <div>
              <FaApple />
            </div>
            <div>
              <h4>Download on the</h4>
              <h3>App Store</h3>
            </div>
          </div>
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.blockchainvault&hl=en_US"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={s.market}>
            <div>
              <FaGooglePlay />
            </div>
            <div>
              <h4>Get it on</h4>
              <h3>Google Play</h3>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Download;
