import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WindowTop from "./components/WindowTop";
import { CgShapeHexagon } from "react-icons/cg";
import styles from "./Home.module.css";
import Image from "next/image";
import logo from './AAIS_Logo.svg'

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="contentContainer">
        <div id={styles.logoContainer}>
          <Image id={styles.logo}
              src={logo}
              width={800}
              height={800}
              alt="AAIS Logo"
          />
        </div>
        <div className="window" id={styles.homeWindow}>
          <WindowTop WindowIcon={CgShapeHexagon} title={"Home"} />
          <h1 className="title" id={styles.homeTitle}>
            Aggie Aritificial Intelligence Society
          </h1>
            <p className={styles.windowText}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor mollitia, repudiandae maiores sequi laborum nesciunt culpa facilis earum nostrum similique. Cum fugit eligendi obcaecati quas amet voluptate quia perferendis illo nobis dicta ipsum non animi inventore est, perspiciatis dolores? Beatae necessitatibus consequuntur ipsa earum voluptatem aperiam. Minima amet quod, nobis ad, tempora deleniti pariatur similique dolorum neque excepturi at. Qui dolores error mollitia sequi minus quis ipsum quibusdam architecto quidem nostrum. Minus ut, odit velit deserunt odio, quam, repudiandae blanditiis facilis eligendi laborum dignissimos. Dolorem delectus voluptatum cumque eaque sunt modi assumenda quam error maxime ab perferendis repellendus impedit in neque eos, veniam numquam sed, est quasi omnis qui quo eligendi natus quaerat? Facilis iure velit expedita debitis voluptas ea maiores nisi quasi voluptatibus amet pariatur nemo nulla suscipit vitae quas dolorem ab, accusantium, quaerat sequi ad temporibus. Quisquam cum, soluta unde, minima a nemo voluptatem, animi veniam illo quod et. Officiis unde soluta nobis rerum vel quisquam maxime quaerat, quasi reiciendis quidem repellendus, repellat totam deserunt animi nesciunt quos enim porro suscipit adipisci voluptas voluptate. Corporis excepturi aliquam in iste, eius autem laboriosam quo aperiam eveniet! Tempore suscipit veritatis ipsam officiis accusantium veniam fuga? Architecto sunt deleniti vero illum?</p>
        </div>
      </div>
        <Footer />
    </div>
  );
}
