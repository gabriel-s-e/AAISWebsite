import styles from "./Bar.module.css";
import { FaDiscord, FaLinkedin, FaInstagram } from "react-icons/fa";
import { PiLightbulbFilamentBold } from "react-icons/pi";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
import WindowTop from "./WindowTop";

export default function Footer() {
  return (
    <div className="window" id={styles.footer}>
      <WindowTop WindowIcon={PiLightbulbFilamentBold} title={"Stay Informed"} />
      <div className={styles.button_container}>
        <div className={styles.smbox}>
          <div className={styles.button_container}>
            <a
              href="https://www.instagram.com/tamuaais/"
              target="_blank"
              className={styles.smbutton}
            >
              <div className={styles.smbox__icon}>
                {" "}
                <FaInstagram size={55} />{" "}
              </div>
            </a>
            <a
              href="https://discord.com/"
              target="_blank"
              className={styles.smbutton}
            >
              <div className={styles.smbox__icon}>
                {" "}
                <FaDiscord size={55} />{" "}
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/aggie-ai-society/"
              target="_blank"
              className={styles.smbutton}
            >
              <div className={styles.smbox__icon}>
                {" "}
                <FaLinkedin size={55} />{" "}
              </div>
            </a>
            <a
              href="mailto:aais@tamu.edu"
              target="_blank"
              className={styles.smbutton}
            >
              <div className={styles.smbox__icon}>
                {" "}
                <SiGmail size={55} />{" "}
              </div>
            </a>
          </div>
        </div>
        <Link href="/events" className={styles.meetbutton}>
          <div className={styles.meetbutton__text__container}>
            <div className={styles.meetbutton__text}>Next meeting: Jan 12</div>
            <div className={styles.meetbutton__text}>AI in Something</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
