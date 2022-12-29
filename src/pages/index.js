import Head from 'next/head'
import style from '../styles/Pages/Home.module.css'

// API
import APIDataSWR from '../fetch/getServerData-SWR'

// Components
import Loading from '../components/Loading/Loading'
import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/HeroSection/HeroSection'
import Footer from '../components/Footer/Footer'
import OnlinePlayer from '../components/OnlinePlayer/OnlinePlayer'

export default function Home() {
  const { isLoading, error } = APIDataSWR()

  return (
    <>
      <Loading />
      <Head>
        <title>Starite | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <HeroSection />

      <div className={style.card_container}>
        <div className={style.card_outer}>
          <div className={style.card_inner} id={style.online}>
            <p className={style.olp_title}>Server Status</p>
            <div className={style.olp_player}>{error ? "Can't not get data from the server" : <OnlinePlayer />}</div>
          </div>
        </div>

        <div className={style.card_outer}>
          <div className={style.card_inner} id={style.normal}>
            <p className={style.title}>-- Card 2 --</p>
            <p className={style.in}>Test --- Test</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
