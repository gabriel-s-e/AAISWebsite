import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import WindowTop from "../components/WindowTop"
import { CgShapeHexagon } from "react-icons/cg";
import styles from "./Resources.module.css";

export default function Page() {
    const resources = [
        {
            category: "AI Tools",
            items: [
                { name: "ChatGPT", description: "A conversational AI that can help with coding, writing, and brainstorming.", link: "https://chat.openai.com" },
                { name: "Midjourney", description: "An AI program that creates images from textual descriptions.", link: "https://www.midjourney.com" },
                { name: "Hugging Face", description: "The platform where the machine learning community builds, trains and deploys models.", link: "https://huggingface.co" }
            ]
        },
        {
            category: "Learning Platforms",
            items: [
                { name: "Coursera", description: "Offers deep learning and AI specializations from top universities.", link: "https://www.coursera.org" },
                { name: "Fast.ai", description: "A non-profit research group focused on deep learning and artificial intelligence.", link: "https://www.fast.ai" },
                { name: "Kaggle", description: "A platform for data science competitions and datasets.", link: "https://www.kaggle.com" }
            ]
        },
        {
            category: "Documentation",
            items: [
                { name: "PyTorch", description: "An open-source machine learning framework.", link: "https://pytorch.org" },
                { name: "TensorFlow", description: "A comprehensive, flexible ecosystem of machine learning tools.", link: "https://wwww.tensorflow.org" },
                { name: "Scikit-learn", description: "Simple and efficient tools for predictive data analysis.", link: "https://scikit-learn.org" }
            ]
        }
    ];

    return (
        <div>
            <Navbar />
            <div className="contentContainer">
                <div className="window" id="homeWindow">
                    <WindowTop WindowIcon={CgShapeHexagon} title={"Resources"}/>
                    <div className={styles.resourcesContainer}>
                        {resources.map((section, sectionIdx) => (
                            <div key={sectionIdx} className={styles.section}>
                                <h2 className={styles.sectionTitle}>{section.category}</h2>
                                <div className={styles.resourceGrid}>
                                    {section.items.map((item, itemIdx) => (
                                        <div key={itemIdx} className={styles.resourceCard}>
                                            <div className={styles.resourceName}>{item.name}</div>
                                            <div className={styles.resourceDescription}>{item.description}</div>
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.resourceLink}>
                                                Learn More &rarr;
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}