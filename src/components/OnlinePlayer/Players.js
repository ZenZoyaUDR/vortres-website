import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

function PlayerList() {
     const { data, error } = useSWR('/api/player', fetcher)

     if (error) return <div>Failed to load players</div>
     if (!data) return <div>Loading...</div>

     return (
          <ul>
               {data.map((player) => (
                    <li key={player.id}>{player.username}</li>
               ))}
          </ul>
     )
}

export default PlayerList