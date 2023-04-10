import { useState } from 'react';
import useSWR from 'swr';

function validateInput(input) {
  const regex = /^[a-zA-Z0-9_]+$/;
  return regex.test(input);
}

export default function Player() {
     const [query, setQuery] = useState("");
     const [err, setErr] = useState(false);

     const { data, error, isLoading } = useSWR(`/api/players?search=${query}`, async (url) => {
          const response = await fetch(url);
          return response.json();
     });

     const handleSearch = (event) => {
          event.preventDefault();

          if (validateInput("${event.target.search.value.includes}")) {
            setQuery(event.target.search.value);
            setErr(false);
          } else {
            setErr(true);
          }
     };

     return (
          <div>
               <form onSubmit={handleSearch}>
                    <input type="text" name="search" />
                    <button type="submit">Search</button>
                    {!query && <p>Please enter a search term</p>}
                    {err && <p>Search term only allowed car A-Z, a-z, and _</p>}
               </form>

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
