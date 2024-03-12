'use client'
import Link from "next/link";
import styles from "./Bar.module.css";
import { usePathname } from 'next/navigation'
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
  const pathname = usePathname();

  return (
    <nav className="window" id={styles.navbar}>
      <WindowTop WindowIcon={CgShapeHexagon} title={"Navigation"}/>
      <div className={styles.button_container}>
        <Link href="/" className={pathname == "/" ? styles.button__current : styles.button}>
          <PiHexagonBold size={50} />
          <div className={styles.button__title}>Home</div>
        </Link>
        <Link href="/about" className={pathname == "/about" ? styles.button__current : styles.button}>
          <MdOutlinePerson size={50} />
          <div className={styles.button__title}>About</div>
        </Link>
        <Link href="/events" className={pathname == "/events" ? styles.button__current : styles.button}>
          <MdOutlineCalendarToday size={48} />
          <div className={styles.button__title}>Events</div>
        </Link>
        <Link href="/resources" className={pathname == "/resources" ? styles.button__current : styles.button}>
          <MdBookmarkBorder size={50} />
          <div className={styles.button__title}>Resources</div>
        </Link>
        <Link href="/FAQ" className={pathname == "/FAQ" ? styles.button__current : styles.button}>
          <MdOutlineQuiz size={50} />
          <div className={styles.button__title}>FAQs</div>
        </Link>
        <Link href="/contact" className={pathname == "/contact" ? styles.button__current : styles.button}>
          <MdChatBubbleOutline size={50} />
          <div className={styles.button__title}>Contact</div>
        </Link>
      </div>
    </nav>
  );
}