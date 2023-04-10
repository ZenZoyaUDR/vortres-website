import { useState } from 'react';
import useSWR from 'swr';

export default function Player() {
     const [query, setQuery] = useState("");
     const [querySafe, setQuerySafe] = useState("");
     const [err, setErr] = useState(false);

     const { data, error, isLoading } = useSWR(`/api/players?search=${query}`, async (url) => {
          const response = await fetch(url);
          return response.json();
     });

     const handleSearch = (event) => {
          event.preventDefault();

          if (event.target.search.value.includes(" ")) {
            console.log("Error: Search term contains spaces");
            setErr(true);
          } else {
            setQuery(event.target.search.value);
            setErr(false);
          }
     };

     return (
          <div>
               <form onSubmit={handleSearch}>
                    <input type="text" name="search" />
                    <button type="submit">Search</button>
                    {!query && <p>Please enter a search term</p>}
                    {err && <p>Can't not contain spaces</p>}
               </form>

               {isLoading ? (
                    <div>Loading...</div>
               ) : error ? (
                    <div>Error: {error.message}</div>
               ) : data.id ? (
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
