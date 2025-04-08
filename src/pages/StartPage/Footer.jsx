import React from "react";
import s from "./StartPage.module.scss";
import logo from "../../assets/Pi-Network.png";
import Button from "../../components/Button.jsx";
import { FaFacebook, FaTelegram, FaTwitter } from "react-icons/fa";
function Footer() {
  const [email, setEmail] = React.useState("");
  const subscribe = () => {
    alert("Thank you for subscribe");
  };
  return (
    <footer className={s.footer}>
      <div>
        <img src={logo} alt="Pi Network" />
      </div>
      <div>
        <h3>Join our newsletter</h3>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email) {
              subscribe(email);
              setEmail("");
            } else {
              alert("Please enter a email");
            }
          }}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button title={"Join our newsletter"} bg="#FBB44A" />
        </form>
        <p>We only send interesting and relevant emails.</p>
      </div>
      <div className={s.copyRight}>
        <h4>© 2025 MinePi</h4>
        <div>
          <a
            href="https://www.facebook.com/PiCoreTeam/?locale=en_EN"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com/PiCoreTeam?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            target="_blank"
          >
            <FaTwitter />
          </a>
          <a href="https://t.me/s/PiAnnouncements" target="_blank">
            <FaTelegram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
