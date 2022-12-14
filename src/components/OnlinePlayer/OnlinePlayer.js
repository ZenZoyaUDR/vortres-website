import APIDataSWR from '../../fetch/getServerData-SWR'

function OnlinePlayer() {
     const { data } = APIDataSWR()

     return (
          <p>{data?.server.playerCount} Player Online</p>
     )
}

export default OnlinePlayer
