import APIDataSWR from "../../lib/getPlayerOnline";

function OnlinePlayer() {
  const { data } = APIDataSWR();

  if (!data) return <p>Fetching...</p>;
  return <p>{data?.server.playerCount} Players Online</p>;
}

export default OnlinePlayer;
