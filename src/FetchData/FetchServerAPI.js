import { useEffect, useState } from 'react'
import axios from 'axios'

export default function ServerReqAPI() {
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(false);
     const [player, setPlayer] = useState("-");

     useEffect(() => {
          setLoading(true)
          setError(false)

          let cancel
          axios({
               method: 'GET',
               url: 'https://api.mcsrvstat.us/2/mc.hypixel.net',
               cancelToken: new axios.CancelToken(c => cancel = c)
          }).then(res => {
               setPlayer(res.data.players.online)
               setLoading(false)
          }).catch(err => {
               if (axios.isCancel(err)) return
               setError(true)
               setLoading(false)
          })

          return () => cancel()
     }, [])

     return { loading, error, player }
}

const timer = setTimeout(() => {
   ServerReqAPI()
}, 3000);
