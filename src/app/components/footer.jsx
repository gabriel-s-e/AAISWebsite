import styles from "./Bar.module.css"
import { FaDiscord, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link"

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.window__top}>
        <div className={styles.window__top__icon}></div>
        <h3 className={styles.window__title}>Stay informed</h3>
        <div className={styles.window__top__min}></div>
        <div className={styles.window__top__full}></div>
        <div className={styles.window__top__x}></div>
      </div>
      <div className={styles.window__container}>
        <div className={styles.smbox}>
          <div className={styles.window__container}>
            <a href="https://www.instagram.com/" target="_blank" className={styles.smbox__icon}> <FaInstagram size={55}/> </a>
            <a href="https://discord.com/" target="_blank" className={styles.smbox__icon}> <FaDiscord size={55}/> </a>
            <a href="https://www.linkedin.com/" target="_blank" className={styles.smbox__icon}> <FaLinkedin size={55}/> </a>
            <a href="mailto:" target="_blank" className={styles.smbox__icon}> <SiGmail size={55}/> </a>
          </div>
        </div>
        <Link href="/events" className={styles.meetbox}>
          <div className={styles.meetbox__text}>Next meeting: Jan 12</div>
          <div className={styles.meetbox__text}>AI in Something</div>
        </Link>
      </div>
    </div>
  )
}