import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from './About.module.css'; // Import the CSS module

export default function About() {
  // Example data structure for officers
  const officers = [
    { row: 1, position: 'President', linkedIn: '#', github: '#' },
    // ... other officers
  ];

  return (
    <div className={styles.aboutContainer}>
      <Navbar />
      <h2>MEET THE OFFICERS</h2>
      <div className={styles.officersContainer}>
        {officers.map((officer, index) => (
          <div key={index} className={`${styles.officer} ${officer.row === 1 ? styles.topRow : styles.otherRows}`}>
            <div className={styles.position}>{officer.position}</div>
            <div className={styles.photoContainer}>
              {/* Replace with actual image source */}
              <img src="/path-to-officer-photo.jpg" alt={officer.position} className={styles.photo} />
            </div>
            <div className={styles.icons}>
              <a href={officer.linkedIn} target="_blank" rel="noopener noreferrer">
                {/* LinkedIn Icon */}
              </a>
              <a href={officer.github} target="_blank" rel="noopener noreferrer">
                {/* GitHub Icon */}
              </a>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
)}




// export default function About() {
//   return (
//     <div>
//       <Navbar />
//       <h1>about</h1>
//       <Footer />
//     </div>
//   );
// }