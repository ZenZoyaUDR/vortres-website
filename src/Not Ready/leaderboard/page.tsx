"use client";

import styles from "../../styles/Pages/Leaderboard.module.css";
import dynamic from "next/dynamic";
import Head from "next/head";
import useSWR from "swr";

// Components
const Navbar = dynamic(() => import("../../components/Navbar"));
const Footer = dynamic(() => import("../../components/Footer"));
import Loading from "../../components/Loading";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function Leaderboard() {
  const { data: players, error } = useSWR("/api/leaderboard", fetcher);

  if (error) return <div>Failed to load leaderboard</div>;
  if (!players) return <Loading />;
  return (
    <>
      <Head>
        <title>Vortres | Leaderboard</title>
        <link rel="icon" href="/vortres.png" />
      </Head>

      <Navbar />

      <div className={styles.lb_Container}>
        <h1 className={styles.lb_Heading}>Leaderboard</h1>
        <table className={styles.lb_Table}>
          <thead>
            <tr>
              <th>Top</th>
              <th>Username</th>
              <th>Level</th>
              <th>Experience</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player: any, index: number) => (
              <tr key={player.id}>
                <td data-label="Top">{index + 1}</td>
                <td data-label="Username">{player.username}</td>
                <td data-label="Level">{player.level}</td>
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
