import { useState, useEffect } from "react";

export default function Leaderboard() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("/api/leaderboard")
      .then((response) => response.json())
      .then((data) => setPlayers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Level</th>
            <th>Experience</th>
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
