import style from '../styles/Pages/Player.module.css';
import { useState } from 'react';
import useSWR from 'swr';

export default function Player() {
     const [query, setQuery] = useState("");
     const [err, setErr] = useState(false);

     const { data, error, isLoading } = useSWR(`/api/players?search=${query}`, async (url) => {
          const response = await fetch(url);
          return response.json();
     });

     const handleSearch = (event) => {
          event.preventDefault();

          const regex = /^[A-Za-z0-9_]+$/;
          const input = event.target.search.value
          if (regex.test(input)) {
            setQuery(event.target.search.value);
            setErr(false);
          } else {
            setErr(true);
          }
     };

     return (
          <div>
               <div className={styles.container}>
                 <input
                   type="text"
                   placeholder="Search..."
                   name="search"
                   className={styles.input}
                 />
                 <button className={styles.button} onClick={handleSearch}>
                   Search
                 </button>
                 {!query && <p>Please enter a search term</p>}
                 {err && <p>Accepted characters: A-Z, a-z, 1-9, and _</p>}
               </div>

               {isLoading ? (
                    <div>Loading...</div>
               ) : error ? (
                    <div>Error: {error.message}</div>
               ) : data ? (
                    <ul>
                         <li key={data.id}>
                              {data.username} - Level: {data.level}
                         </li>
                    </ul>
               ) : (
                    <div>No results found</div>
               )}
          </div>
     );
}
