import { FaLinkedin, FaGithub } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WindowTop from "../components/WindowTop";
import "./About.module.css";
import officerTestPhoto from "../assets/isaac-test.jpeg"; /* Import each photo!!!!!!!!!!!!!! */
import uma from "../assets/uma_sarkar.jpg";
import tim from "../assets/tim_smith.jpg";
import will from "../assets/will_colglazier.jpg";
import rhea from "../assets/rhea_kaithal.jpg";
import gabriel from "../assets/gabriel_serrano.jpg";
import gabrielle from "../assets/gabriel_serrano.jpg"; /* Image isn't importing for some reason...? */
import { MdOutlinePerson } from "react-icons/md";
import Image from "next/image";

export default function About() {
  return (
    <div className="entireContainer">
      <Navbar />
      <div className="contentContainer">
        <div className="window" id="aboutContainer">
          <WindowTop WindowIcon={MdOutlinePerson} title={"About"} />
          <h2 className="title">Meet The Officers</h2>
          <div className="officersContainer">
            {/* Top Row with 2 Officers */}
            <div className="officer topRow">
              <div className="position">President</div>
              <div className="photoContainer">
                <Image src={uma} alt="President" className="photo" />
              </div>
              <div className="name">Uma Sarkar</div>
              <div className="icons">
                <a
                  href="https://www.linkedin.com/in/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="socialIcon" />
                </a>
                <a
                  href="https://github.com/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="socialIcon" />
                </a>
              </div>
            </div>
            {/* Officer 2 in top row */}
            <div className="officer topRow">
              <div className="position">Vice President</div>
              <div className="photoContainer">
              <Image src={officerTestPhoto} alt="President" className="photo" />
              </div>
              <div className="name">John Doe</div>
              <div className="icons">
                <a
                  href="https://www.linkedin.com/in/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="socialIcon" />
                </a>
                <a
                  href="https://github.com/johndoe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="socialIcon" />
                </a>
              </div>
            </div>
          </div>

          {/* Second Row with 3 Officers */}
          <div className="row">
            <div className="officer">
              <div className="position">Corporate Relations</div>
              <div className="photoContainer">
                <Image src={tim} alt="Corporate Relations" className="photo" />
              </div>
              <div className="name">Tim Smith</div>
              <div className="icons">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="socialIcon" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="socialIcon" />
                </a>
              </div>
            </div>

            <div className="officer">
              <div className="position">Member Liaison</div>
              <div className="photoContainer">
                <Image src={will} alt="Member Liaison" className="photo" />
              </div>
              <div className="name">Will Colglazier</div>
              <div className="icons">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="socialIcon" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="socialIcon" />
                </a>
              </div>
            </div>

            <div className="officer">
              <div className="position">Workshops</div>
              <div className="photoContainer">
                <Image src={rhea} alt="Officer" className="photo" />
              </div>
              <div className="name">Rhea Kaithal</div>
              <div className="icons">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="socialIcon" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="socialIcon" />
                </a>
              </div>
            </div>
            {/* Repeat above div twice more for the other 2 officers */}
          </div>

          {/* Third Row with 3 Officers */}
          <div className="row">
            <div className="officer">
              <div className="position">Workshops</div>
              <div className="photoContainer">
                <Image src={gabriel} alt="Officer" className="photo" />
              </div>
              <div className="name">Gabriel Serrano</div>
              <div className="icons">
                <a href="https://www.linkedin.com/in/gabrielserrano-" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="socialIcon" />
                </a>
                <a href="https://github.com/gabriel-s-e" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="socialIcon" />
                </a>
              </div>
            </div>

            <div className="officer">
              <div className="position">Web Dev Lead</div>
              <div className="photoContainer">
                <Image src={gabrielle} alt="Officer" className="photo" />
              </div>
              <div className="name">Gabrielle Anne Irava</div>
              <div className="icons">
                <a href="https://www.linkedin.com/in/gairava/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="socialIcon" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="socialIcon" />
                </a>
              </div>
            </div>
          </div>

          {/* Second Row with 3 Officers */}
          <div className="row">
            <div className="officer">
              <div className="position">Officer Title</div>
              <div className="photoContainer">
                <img src={officerTestPhoto} alt="Officer" className="photo" />
              </div>
              <div className="name">Officer Name</div>
              <div className="icons">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="socialIcon" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="socialIcon" />
                </a>
              </div>
            </div>

            <div className="officer">
              <div className="position">Officer Title</div>
              <div className="photoContainer">
                <img src={officerTestPhoto} alt="Officer" className="photo" />
              </div>
              <div className="name">Officer Name</div>
              <div className="icons">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="socialIcon" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="socialIcon" />
                </a>
              </div>
            </div>

            <div className="officer">
              <div className="position">Officer Title</div>
              <div className="photoContainer">
                <img src={officerTestPhoto} alt="Officer" className="photo" />
              </div>
              <div className="name">Officer Name</div>
              <div className="icons">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="socialIcon" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="socialIcon" />
                </a>
              </div>
            </div>
            {/* Repeat above div twice more for the other 2 officers */}
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