import Link from "next/link"
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbartop}></div>
      <div className={styles.links}>
        <Link href="/" className={styles.button}>
          <div className={styles.shape}></div>
          <div className={styles.buttontitle}>Home</div>
        </Link>
        <Link href="/about" className={styles.button}>
          <div className={styles.shape}></div>
          <div className={styles.buttontitle}>About</div>
        </Link>
        <Link href="/events" className={styles.button}>
          <div className={styles.shape}></div>
          <div className={styles.buttontitle}>Events</div>
        </Link>
        <Link href="/resources" className={styles.button}>
          <div className={styles.shape}></div>
          <div className={styles.buttontitle}>Resources</div>
        </Link>
        <Link href="/FAQ" className={styles.button}>
          <div className={styles.shape}></div>
          <div className={styles.buttontitle}>FAQs</div>
        </Link>
        <Link href="/contact" className={styles.button}>
          <div className={styles.shape}></div>
          <div className={styles.buttontitle}>Contact</div>
        </Link>
      </div>
    </nav>
  )
}