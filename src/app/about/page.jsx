import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from './About.module.css'; // Import the CSS module
import officerTestPhoto from '../assets/isaac-test.jpeg'

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
                <img src={officerTestPhoto} alt="President" className={styles.photo} />
              </div>
              <div className={styles.name}>John Doe</div>
              <div className={styles.icons}>
                <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className={styles.socialIcon} />
                </a>
                <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                  <FaGithub className={styles.socialIcon} />
                </a>
              </div>
            </div>
            {/* Officer 2 in top row */}
            <div className={`${styles.officer} ${styles.topRow}`}>
              <div className={styles.position}>Vice President</div>
              <div className={styles.photoContainer}>
                <img src="/path-to-president-photo.jpg" alt="Vice President" className={styles.photo} />
              </div>
              <div className={styles.name}>John Doe</div>
              <div className={styles.icons}>
                <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className={styles.socialIcon} />
                </a>
                <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                  <FaGithub className={styles.socialIcon} />
                </a>
              </div>
            </div>

{/* Second Row with 3 Officers */}
          <div className={styles.row}>
              <div className={styles.officer}>
                <div className={styles.position}>Officer Title</div>
                <div className={styles.photoContainer}>
                  <img src={officerTestPhoto} alt="Officer" className={styles.photo} />
                </div>
                <div className={styles.name}>Officer Name</div>
                <div className={styles.icons}>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className={styles.socialIcon} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaGithub className={styles.socialIcon} />
                  </a>
                </div>
              </div>
              
              <div className={styles.officer}>
                <div className={styles.position}>Officer Title</div>
                <div className={styles.photoContainer}>
                  <img src={officerTestPhoto} alt="Officer" className={styles.photo} />
                </div>
                <div className={styles.name}>Officer Name</div>
                <div className={styles.icons}>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className={styles.socialIcon} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaGithub className={styles.socialIcon} />
                  </a>
                </div>
              </div>

              <div className={styles.officer}>
                <div className={styles.position}>Officer Title</div>
                <div className={styles.photoContainer}>
                  <img src={officerTestPhoto} alt="Officer" className={styles.photo} />
                </div>
                <div className={styles.name}>Officer Name</div>
                <div className={styles.icons}>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className={styles.socialIcon} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaGithub className={styles.socialIcon} />
                  </a>
                </div>
              </div>
              {/* Repeat above div twice more for the other 2 officers */}
            </div>

            {/* Third Row with 3 Officers */}
            {/* Repeat the same structure as the second row */}

            {/* Fourth Row with 3 Officers */}
            {/* Repeat the same structure as the second row */}

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