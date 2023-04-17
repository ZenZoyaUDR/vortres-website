import style from '../styles/Pages/Leaderboard.module.css';
import Head from 'next/head';

// Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

export default function Leaderboard({ players }) {

  if (!players) {
    return <Loading />;
  }

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
          {players && (
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
          )}
        </table>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch(`/api/leaderboard`);
    const players = await response.json();

    return {
      props: {
        players,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        players: null,
      },
    };
  }
}
