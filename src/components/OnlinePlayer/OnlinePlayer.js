import APIData from '../../fetch/getServerData'

function OnlinePlayer() {
     const { player } = APIData()

     return (
          <p>{player} Player Online</p>
     )
}

export default OnlinePlayer
