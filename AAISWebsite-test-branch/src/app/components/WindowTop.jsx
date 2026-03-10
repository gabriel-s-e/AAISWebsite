import styles from "./WindowTop.module.css";

export default function WindowTop({ WindowIcon, title }) {
  return (
    <div className={styles.window__top}>
      <div className={styles.window__top__icon}>
        <WindowIcon size={22} />
      </div>
      <h3 className={styles.window__title}>{title}</h3>
    </div>
  );
}