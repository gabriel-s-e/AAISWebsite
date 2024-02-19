import Link from "next/link"
import styles from "./Bar.module.css"
import { PiHexagonBold } from "react-icons/pi";
import { MdOutlineCalendarToday, MdOutlinePerson, MdOutlineQuiz, MdChatBubbleOutline, MdBookmarkBorder  } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* <div className={styles.navbartop}></div> */}
      <div className={styles.links}>
        <Link href="/" className={styles.button}>
          <div className={styles.shape}><PiHexagonBold size={50}/></div>
          <div className={styles.buttontitle}>Home</div>
        </Link>
        <Link href="/about" className={styles.button}>
          <div className={styles.shape}><MdOutlinePerson size={50}/></div>
          <div className={styles.buttontitle}>About</div>
        </Link>
        <Link href="/events" className={styles.button}>
          <div className={styles.shape}><MdOutlineCalendarToday size={48}/></div>
          <div className={styles.buttontitle}>Events</div>
        </Link>
        <Link href="/resources" className={styles.button}>
          <div className={styles.shape}><MdBookmarkBorder size={50}/></div>
          <div className={styles.buttontitle}>Resources</div>
        </Link>
        <Link href="/FAQ" className={styles.button}>
          <div className={styles.shape}><MdOutlineQuiz size={50}/></div>
          <div className={styles.buttontitle}>FAQs</div>
        </Link>
        <Link href="/contact" className={styles.button}>
          <div className={styles.shape}><MdChatBubbleOutline size={50}/></div>
          <div className={styles.buttontitle}>Contact</div>
        </Link>
      </div>
    </nav>
  )
}