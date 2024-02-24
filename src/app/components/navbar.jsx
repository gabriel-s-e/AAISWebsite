import Link from "next/link";
import styles from "./Bar.module.css";
// import globals from "../globals.css"
import { PiHexagonBold } from "react-icons/pi";
import { CgShapeHexagon } from "react-icons/cg";
import {
  MdOutlineCalendarToday,
  MdOutlinePerson,
  MdOutlineQuiz,
  MdChatBubbleOutline,
  MdBookmarkBorder,
} from "react-icons/md";
import WindowTop from "./WindowTop"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <WindowTop WindowIcon={CgShapeHexagon} title={"Navigation"}/>
      <div className={styles.button_container}>
        <Link href="/" className={styles.button}>
          <PiHexagonBold size={50} />
          <div className={styles.button__title}>Home</div>
        </Link>
        <Link href="/about" className={styles.button}>
          <MdOutlinePerson size={50} />
          <div className={styles.button__title}>About</div>
        </Link>
        <Link href="/events" className={styles.button}>
          <MdOutlineCalendarToday size={48} />
          <div className={styles.button__title}>Events</div>
        </Link>
        <Link href="/resources" className={styles.button}>
          <MdBookmarkBorder size={50} />
          <div className={styles.button__title}>Resources</div>
        </Link>
        <Link href="/FAQ" className={styles.button}>
          <MdOutlineQuiz size={50} />
          <div className={styles.button__title}>FAQs</div>
        </Link>
        <Link href="/contact" className={styles.button}>
          <MdChatBubbleOutline size={50} />
          <div className={styles.button__title}>Contact</div>
        </Link>
      </div>
    </nav>
  );
}