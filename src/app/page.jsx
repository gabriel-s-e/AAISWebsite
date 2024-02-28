import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WindowTop from "./components/WindowTop";
import { CgShapeHexagon } from "react-icons/cg";
import styles from './Home.module.css';

export default function Page() {
    return (
        <div>
            <Navbar />
            <div className="contentContainer">
                <div className="window" id="homeWindow">
                    <WindowTop WindowIcon={CgShapeHexagon} title={"Home"}/>
                    <h1 className="title" id={styles.homeTitle}>Aggie Aritificial Intelligence Society</h1>
                </div>
            </div>
            <Footer />
        </div>
    )
}  