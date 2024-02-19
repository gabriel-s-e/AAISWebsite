import styles from "./Bar.module.css"

export default function Footer() {
  return (
    <div className={styles.bar}>
      <div className={styles.links}>
        <div className={styles.linkbox}>
          <div className={styles.links}>
            <div className={styles.marginshape}> </div>
            <div className={styles.marginshape}> </div>
            <div className={styles.marginshape}> </div>
            <div className={styles.marginshape}> </div>
          </div>
        </div>
        <div className={styles.meetbox}>
          Next meeting: Eventually
        </div>
      </div>
    </div>
  )
}