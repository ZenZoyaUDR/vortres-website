import style from '../styles/Pages/Leaderboard.module.css';
import { useState, useEffect } from "react";
import Head from "next/head";

// Components
import Navbar from '../components/Navbar/Navbar';
import Loading from '../components/Loading/Loading';

export default function Leaderboard() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("/api/leaderboard")
      .then((response) => response.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {players && <Loading />}
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
    </>
  );
}
