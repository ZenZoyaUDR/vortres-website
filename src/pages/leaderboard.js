import style from '../styles/Pages/Leaderboard.module.css';
import Head from 'next/head';
import prisma from '../lib/prisma';

// Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Leaderboard({ players }) {
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

export async function getServerSideProps(context) {
  let players = [];

  try {
    players = await prisma.player.findMany({
      select: {
        id: true,
        username: true,
        level: true,
        exp: true,
      },
      orderBy: {
        level: 'desc',
      },
      take: 10,
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }

  return {
    props: {
      players: JSON.parse(JSON.stringify(players)),
    },
  };
}
