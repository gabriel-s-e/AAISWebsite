import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import WindowTop from "../components/WindowTop"
import { CgShapeHexagon } from "react-icons/cg";
import styles from "./Contact.module.css";

export default function Page() {
    return (
        <div>
            <Navbar />
            <div className="contentContainer">
                <div className="window" id="homeWindow">
                    <WindowTop WindowIcon={CgShapeHexagon} title={"Contact"}/>
                    <div className={styles.contactContainer}>
                        <form className={styles.contactForm}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Your Email" required />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" placeholder="How can we help?" required></textarea>
                            </div>
                            <button type="button" className={styles.submitButton}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}