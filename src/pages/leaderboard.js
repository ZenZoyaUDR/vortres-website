// API
//import APILeaderBSWR from '../fetch/getServerLeaderB'

function Leaderboard() { 
  // const { data, error } = useSWR('/api/user', fetcher);
  
  // if (error) return <div>Failed to load</div> 
  /* if (!data) { 
   *  return ( 
   *    <div className={styles.loading}>
   *      <Loading />
   *      <h2>Fetching data...</h2> 
   *      <h4>This can take up to 20 seconds</h4> 
   *    </div> 
   *  ) 
   *} 
   */
   return ( 
     <div className={styles.container}> 
       <Head> 
         <title>Vortres | Leaderboard</title> 
         <meta name="description" content="Leaderboard" /> 
         <link rel="icon" href="/favicon.ico" /> 
       </Head> 
  
       <main className={styles.main}> 
         <h1 className={styles.title}>Leaderboard</h1> 
         <p className={styles.description}>Check the unofficial leaderboard right below 🐱‍💻</p> 
         <div>
           <div> 
             <div> 
               <div>Rank</div> 
               <div>Developer</div> 
               <div>Level</div> 
               <div>Points</div> 
             </div> 
           </div> 
           <div> 
             {data.participantScores.map((user, index) => ( 
               <div key={user.id}> 
                 <div>{++index}</div> 
                 <div>{user.id}</div> 
                 <div>{user.level}</div> 
                 <Td isNumeric>{user.points}</Td> 
               </div> 
             ))} 
           </div> 
         </div>
       </main> 
     </div> 
   ) 
 }

export default Leaderboard;
