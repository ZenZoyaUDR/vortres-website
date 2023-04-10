import { useState } from 'react';
import useSWR from 'swr';

export default function Player() {
     const [query, setQuery] = useState("");

     const { data, error, isLoading } = useSWR(`/api/players?search=${query}`, async (url) => {
          const response = await fetch(url);
          return response.json();
     });

     const handleSearch = (event) => {
          event.preventDefault();
          setQuery(event.target.search.value);
     };

     return (
          <div>
               <form onSubmit={handleSearch}>
                    <input type="text" name="search" />
                    <button type="submit">Search</button>
                    {!query && <p>Please enter a search term</p>}
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
