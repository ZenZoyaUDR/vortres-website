import styles from "../styles/Pages/Home.module.css";
import dynamic from "next/dynamic";
import { Metadata } from "next";

// Components
const Footer = dynamic(() => import("../components/Footer"));
import Loading from "../components/Loading";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Vortres | Home",
  description: "Vortres is a Minecraft server with fun and uniqe gamemode.",
};

export default function HomePage() {
  return (
    <>
      <Loading />
      <Navbar />
      <HeroSection />

      <div className={styles.card_container}>
        <div className={styles.card_outer}>
          <div className={styles.card_inner} id={styles.online}>
            <p className={styles.olp_title}>Server Status</p>
            <div className={styles.olp_player}>
              Can't not get data from the server
            </div>
          </div>
        </div>

        <div className={styles.card_outer}>
          <div className={styles.card_inner} id={styles.normal}>
            <p className={styles.title}>-- Card 2 --</p>
            <p className={styles.in}>Test --- Test</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
