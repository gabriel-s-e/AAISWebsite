'use client'
import { useState } from 'react';
import Link from "next/link";
import styles from "./Bar.module.css";
import { usePathname } from 'next/navigation'
// import { PiHexagonBold } from "react-icons/pi";
import thin_hex from "../Thin_Hex.svg";
import { CgShapeHexagon } from "react-icons/cg";
import {
  MdOutlineCalendarToday,
  MdOutlinePerson,
  MdOutlineQuiz,
  MdChatBubbleOutline,
  MdBookmarkBorder,
  MdMenu,
  MdClose
} from "react-icons/md";
import WindowTop from "./WindowTop"
import Image from "next/image"

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="window" id={styles.navbar}>
      <div className={styles.navbar__header}>
        <WindowTop WindowIcon={CgShapeHexagon} title={"Navigation"}/>
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
        </button>
      </div>
      <div className={`${styles.button_container} ${isMenuOpen ? styles.menu_open : ''}`}>
        <Link href="/" onClick={closeMenu} className={pathname == "/" ? styles.button__current : styles.button}>
          {/* <PiHexagonBold size={50} /> */}
          <Image src={thin_hex} width={35} height={35} alt=""/>
          <div className={styles.button__title}>Home</div>
        </Link>
        <Link href="/about" onClick={closeMenu} className={pathname == "/about" ? styles.button__current : styles.button}>
          <MdOutlinePerson size={35} />
          <div className={styles.button__title}>About</div>
        </Link>
        <Link href="/events" onClick={closeMenu} className={pathname == "/events" ? styles.button__current : styles.button}>
          <MdOutlineCalendarToday size={33} />
          <div className={styles.button__title}>Events</div>
        </Link>
        <Link href="/resources" onClick={closeMenu} className={pathname == "/resources" ? styles.button__current : styles.button}>
          <MdBookmarkBorder size={35} />
          <div className={styles.button__title}>Resources</div>
        </Link>
        <Link href="/FAQ" onClick={closeMenu} className={pathname == "/FAQ" ? styles.button__current : styles.button}>
          <MdOutlineQuiz size={35} />
          <div className={styles.button__title}>FAQs</div>
        </Link>
        <Link href="/contact" onClick={closeMenu} className={pathname == "/contact" ? styles.button__current : styles.button}>
          <MdChatBubbleOutline size={35} />
          <div className={styles.button__title}>Contact</div>
        </Link>
      </div>
    </nav>
  );
}