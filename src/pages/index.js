import Head from 'next/head'
import style from '../styles/Pages/Home.module.css'

// API
import ServerReqAPI from '../FetchData/FetchServerAPI'

// Components
import Loading from '../components/Loading/Loading'
import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/HeroSection/HeroSection'

export default function Home() {
  const { loading, player } = ServerReqAPI()

  return (
    <>
      <div>{loading && <Loading />}</div>
      <Head>
        <title>Starite | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <HeroSection />

      <div className={style.cardContainer}>
        <div className={style.cardOuter}>
          <div className={style.cardInner} id={style.online}>
            <p className={style.olpTitle}>Server Status</p>
            <p className={style.olpPlayer}>{player} Players Online</p>
          </div>
        </div>

        <div className={style.cardOuter}>
          <div className={style.cardInner} id={style.normal}>
            <p className={style.title}>-- Card 2 --</p>
            <p className={style.in}>Test --- Test</p>
          </div>
        </div>
      </div>
    </>
  )
}
