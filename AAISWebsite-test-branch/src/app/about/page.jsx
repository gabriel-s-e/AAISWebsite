import { FaLinkedin, FaGithub } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WindowTop from "../components/WindowTop";
import "./About.module.css";
import officerTestPhoto from "../assets/isaac-test.jpeg"; /* Import each photo!!!!!!!!!!!!!! */
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
              <div className="position">Officer Title</div>
              <div className="photoContainer">
                <Image src={officerTestPhoto} alt="President" className="photo" />
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

          {/* Third Row with 3 Officers */}
          <div className="row">
            <div className="officer">
              <div className="position">Officer Title 1</div>
              <div className="photoContainer">
                <img src={officerTestPhoto} alt="Officer 1" className="photo" />
              </div>
              <div className="name">Officer Name 1</div>
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
              <div className="position">Officer Title 2</div>
              <div className="photoContainer">
                <img src={officerTestPhoto} alt="Officer 2" className="photo" />
              </div>
              <div className="name">Officer Name 2</div>
              <div className="icons">
                <a href="#" target="_blank" rel="noopener noreferrer">
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