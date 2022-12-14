import APIDataSWR from '../../fetch/getServerData-SWR'

function OnlinePlayer() {
     const { data } = APIDataSWR()

     if (!data) return <p>- Players Online</p>
     return <p>{data?.server.playerCount} Players Online</p>
}

export default OnlinePlayer
