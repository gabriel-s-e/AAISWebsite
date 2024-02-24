import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from './About.module.css'; // Import the CSS module

export default function About() {
  return (
    <div>
      <Navbar />
      <div className={styles.contentContainer}>
        <div className={styles.aboutContainer}>
          <h2 className={styles.title}>MEET THE OFFICERS</h2>
          <div className={styles.officersContainer}>

            {/* Top Row with 2 Officers */}
            <div className={`${styles.officer} ${styles.topRow}`}>
              <div className={styles.position}>President</div>
              <div className={styles.photoContainer}>
                <img src="/path-to-president-photo.jpg" alt="President" className={styles.photo} />
              </div>
              <div className={styles.name}>John Doe</div>
              <div className={styles.icons}>
                <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className={`${styles.officer} ${styles.topRow}`}>
              <div className={styles.position}>Vice President</div>
              <div className={styles.photoContainer}>
                <img src="/path-to-president-photo.jpg" alt="Vice President" className={styles.photo} />
              </div>
              <div className={styles.name}>John Doe</div>
              <div className={styles.icons}>
                <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </div>
            </div>
            {/* Repeat for Officer 2 in top row */}

            {/* Subsequent Rows with 3 Officers Each */}
            <div className={styles.row}>
              {/* Repeat officer structure for each officer */}
            </div>
            {/* Repeat rows as needed */}

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}





// export default function About() {
//   return (
//     <div>
//       <Navbar />
//       <h1>about</h1>
//       <Footer />
//     </div>
//   );
// }