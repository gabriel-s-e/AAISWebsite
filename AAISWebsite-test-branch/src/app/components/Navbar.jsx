'use client'
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
} from "react-icons/md";
import WindowTop from "./WindowTop"
import Image from "next/image"

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="window" id="navbar">
      <WindowTop WindowIcon={CgShapeHexagon} title={"Navigation"}/>
      <div className='button_container'>
        <Link href="/" className={pathname == "/" ? "button__current" : "button"}>
          {/* <PiHexagonBold size={50} /> */}
          <Image src={thin_hex} width={45} height={45} alt=""/>
          <div className='button__title'>Home</div>
        </Link>
        <Link href="/about" className={pathname == "/about" ? "button__current" : "button"}>
          <MdOutlinePerson size={50} />
          <div className='button__title'>About</div>
        </Link>
        <Link href="/events" className={pathname == "/events" ? "button__current" : "button"}>
          <MdOutlineCalendarToday size={48} />
          <div className='button__title'>Events</div>
        </Link>
        <Link href="/resources" className={pathname == "/resources" ? "button__current" : "button"}>
          <MdBookmarkBorder size={50} />
          <div className='button__title'>Resources</div>
        </Link>
        <Link href="/FAQ" className={pathname == "/FAQ" ? "button__current" : "button"}>
          <MdOutlineQuiz size={50} />
          <div className='button__title'>FAQs</div>
        </Link>
        <Link href="/contact" className={pathname == "/contact" ? "button__current" : "button"}>
          <MdChatBubbleOutline size={50} />
          <div className='button__title'>Contact</div>
        </Link>
      </div>
    </nav>
  );
}