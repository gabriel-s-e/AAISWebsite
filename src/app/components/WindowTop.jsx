import styles from "./WindowTop.module.css";
import { BiMinus } from "react-icons/bi";
import { MdClose, MdFullscreen } from "react-icons/md";

export default function WindowTop({ WindowIcon, title }) {
  return (
    <div className={styles.window__top}>
      <div className={styles.window__top__icon}>
        <WindowIcon size={22} />
      </div>
      <h3 className={styles.window__title}>{title}</h3>
      <div className={styles.window__top__min}>
        <BiMinus size={22} />
      </div>
      <div className={styles.window__top__full}>
        <MdFullscreen size={22} />
      </div>
      <div className={styles.window__top__x}>
        <MdClose size={22} />
      </div>
    </div>
  );
}
