import styles from "../styles/Pages/Home.module.css";
import dynamic from "next/dynamic";
import Head from "next/head";

// API
import APIDataSWR from "../lib/getPlayerOnline";

// Components
const Navbar = dynamic(() => import("../components/Navbar"));
const HeroSection = dynamic(() => import("../components/HeroSection"));
const Footer = dynamic(() => import("../components/Footer"));
import Loading from "../components/Loading";
import OnlinePlayer from "../components/Players/OnlinePlayer";

export default function Home() {
  const { isLoading, error } = APIDataSWR();

  return (
    <>
      {isLoading && <Loading />}
      <Head>
        <title>Vortres | Home</title>
        <link rel="icon" href="/vortres.png" />
      </Head>

      <Navbar />
      <HeroSection />

      <div className={styles.card_container}>
        <div className={styles.card_outer}>
          <div className={styles.card_inner} id={styles.online}>
            <p className={styles.olp_title}>Server Status</p>
            <div className={styles.olp_player}>
              {error ? "Can't not get data from the server" : <OnlinePlayer />}
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
