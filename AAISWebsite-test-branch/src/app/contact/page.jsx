import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import WindowTop from "../components/WindowTop"
import { CgShapeHexagon } from "react-icons/cg";

export default function Page() {
    return (
        <div>
            <Navbar />
            <div className="contentContainer">
                <div className="window" id="homeWindow">
                    <WindowTop WindowIcon={CgShapeHexagon} title={"Contact"}/>
                </div>
            </div>
            <Footer />
        </div>
    )
}  