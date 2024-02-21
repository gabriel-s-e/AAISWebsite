import Link from "next/link"
import styles from "./Bar.module.css"
// import globals from "../globals.css"
import { PiHexagonBold } from "react-icons/pi";
import { MdOutlineCalendarToday, MdOutlinePerson, MdOutlineQuiz, MdChatBubbleOutline, MdBookmarkBorder  } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.window__top}>
          <div className={styles.window__top__icon}></div>
          <h3 className={styles.window__title}>Navigation</h3>
          <div className={styles.window__top__min}></div>
          <div className={styles.window__top__full}></div>
          <div className={styles.window__top__x}></div>
      </div>
      <div className={styles.window__container}>
        <Link href="/" className={styles.button}>
          <PiHexagonBold size={50}/>
          <div className={styles.button__title}>Home</div>
        </Link>
        <Link href="/about" className={styles.button}>
          <MdOutlinePerson size={50}/>
          <div className={styles.button__title}>About</div>
        </Link>
        <Link href="/events" className={styles.button}>
          <MdOutlineCalendarToday size={48}/>
          <div className={styles.button__title}>Events</div>
        </Link>
        <Link href="/resources" className={styles.button}>
          <MdBookmarkBorder size={50}/>
          <div className={styles.button__title}>Resources</div>
        </Link>
        <Link href="/FAQ" className={styles.button}>
          <MdOutlineQuiz size={50}/>
          <div className={styles.button__title}>FAQs</div>
        </Link>
        <Link href="/contact" className={styles.button}>
          <MdChatBubbleOutline size={50}/>
          <div className={styles.button__title}>Contact</div>
        </Link>
      </div>
    </nav>
  )
}