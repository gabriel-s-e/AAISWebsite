import styles from "./Bar.module.css"
import { FaDiscord, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <div className={styles.linkbox}>
          <div className={styles.links}>
            <a href="https://www.instagram.com/" target="_blank" className={styles.marginshape}> <FaInstagram size={60}/> </a>
            <a href="https://discord.com/" target="_blank" className={styles.marginshape}> <FaDiscord size={60}/> </a>
            <a href="https://www.linkedin.com/" target="_blank" className={styles.marginshape}> <FaLinkedin size={60}/> </a>
            <a href="mailto:" target="_blank" className={styles.marginshape}> <SiGmail size={60}/> </a>
          </div>
        </div>
        <div className={styles.meetbox}>
          Next meeting: Eventually
        </div>
      </div>
    </div>
  )
}