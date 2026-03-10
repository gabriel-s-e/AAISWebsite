import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import WindowTop from "../components/WindowTop"
import { CgShapeHexagon } from "react-icons/cg";
import styles from "./FAQ.module.css";

export default function Page() {
    const faqs = [
        {
            question: "What is the Aggie Artificial Intelligence Society?",
            answer: "AAIS is a student organization at Texas A&M University dedicated to exploring, learning, and building projects in the field of Artificial Intelligence. We provide workshops, guest lectures, and collaborative environments for students of all skill levels."
        },
        {
            question: "How can I join AAIS?",
            answer: "Joining is easy! Simply attend one of our general meetings or workshops. You can also join our Discord server and follow our Instagram for the latest updates and membership information."
        },
        {
            question: "Do I need prior AI knowledge to join?",
            answer: "Not at all! We welcome students from all backgrounds and experience levels. Whether you're a complete beginner or an experienced machine learning engineer, there's a place for you in AAIS."
        },
        {
            question: "When and where are the meetings?",
            answer: "Our meetings typically take place bi-weekly. Detailed schedules, including times and locations, are posted on our Events page and announced on our social media platforms."
        },
        {
            question: "What kind of events do you host?",
            answer: "We host a variety of events including hands-on technical workshops, research presentations, networking events with industry professionals, and social gatherings."
        }
    ];

    return (
        <div>
            <Navbar />
            <div className="contentContainer">
                <div className="window" id="homeWindow">
                    <WindowTop WindowIcon={CgShapeHexagon} title={"FAQ"}/>
                    <div className={styles.faqContainer}>
                        <div className={styles.faqList}>
                            {faqs.map((faq, index) => (
                                <div key={index} className={styles.faqItem}>
                                    <div className={styles.question}>{faq.question}</div>
                                    <div className={styles.answer}>{faq.answer}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}