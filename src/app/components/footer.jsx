import styles from "./Bar.module.css"
import { FaDiscord, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link"

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <div className={styles.linkbox}>
          <div className={styles.links}>
            <a href="https://www.instagram.com/" target="_blank" className={styles.marginshape}> <FaInstagram size={55}/> </a>
            <a href="https://discord.com/" target="_blank" className={styles.marginshape}> <FaDiscord size={55}/> </a>
            <a href="https://www.linkedin.com/" target="_blank" className={styles.marginshape}> <FaLinkedin size={55}/> </a>
            <a href="mailto:" target="_blank" className={styles.marginshape}> <SiGmail size={55}/> </a>
          </div>
        </div>
        <Link href="/events" className={styles.meetbox}>
          <div className={styles.nextmeettext}>Next meeting: Jan 12</div>
          <div className={styles.nextmeettext}>AI in Something</div>
        </Link>
      </div>
    </div>
  )
}