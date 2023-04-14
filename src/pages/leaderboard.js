import style from '../styles/Pages/Leaderboard.module.css';
import useSWR from 'swr';
import dynamic from 'next/dynamic'
import Head from 'next/head';

// Components
const Footer = dynamic(() => import('../components/Footer/Footer'));
import Navbar from '../components/Navbar/Navbar';
import Loading from '../components/Loading/Loading';

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Leaderboard() {
  const { data: players, error } = useSWR('/api/leaderboard', fetcher);

  if (error) return <div>Failed to load leaderboard</div>;
  if (!players) return <Loading />;
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
