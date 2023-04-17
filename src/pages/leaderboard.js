import style from '../styles/Pages/Leaderboard.module.css';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import useSWR from 'swr';

// Components
const Navbar = dynamic(() => import('../components/Navbar'));
const Footer = dynamic(() => import('../components/Footer'));
import Loading from '../components/Loading';

export default function Leaderboard({ data }) {

  const test = "test";
  return (
    <>
      <Head>
        <title>Vortres | Leaderboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className={style.lb_Container}>
        <h1 className={style.lb_Heading}>Leaderboard</h1>
        <table className={style.lb_Table}>
          <thead>
            <tr>
              <th>No</th>
              <th>Username</th>
              <th>Lvl</th>
              <th>Exp</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={player.id}>
                <td>{index + 1}</td>
                <td data-label="Username">{player.username}</td>
                <td data-label="Lavel">{player.level}</td>
                <td data-label="Experience">{player.exp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`/api/leaderboard`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
