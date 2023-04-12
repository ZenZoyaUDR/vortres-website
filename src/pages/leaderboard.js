import { useState, useEffect } from "react";
import style from '../styles/Pages/Leaderboard.module.css';

export default function Leaderboard() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("/api/leaderboard")
      .then((response) => response.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
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
              <td>{player.username}</td>
              <td>{player.level}</td>
              <td>{player.exp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
