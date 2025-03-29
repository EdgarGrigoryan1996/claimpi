import React from "react";
import s from "./style.module.scss";
import { MdEmail } from "react-icons/md";

function Footer(props) {
  return (
    <div className={s.footer}>
      <div>
        <h4>Support</h4>
        <MdEmail />{" "}
        <span>
          <a href="mailto:support@claimpi.com?subject=&body=">
            support@claimpi.com
          </a>{" "}
        </span>
        <span></span>
      </div>
      <div className={s.copyright}>
        <h5>© All rights reserved 2025</h5>
      </div>
    </div>
  );
}

export default Footer;
