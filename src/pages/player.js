import { useState } from 'react';
import useSWR from 'swr';

import Tooltip from '../components/Tooltip/Tooltip';

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

     const handleInputChange = (e) => {
       const regex = /^[a-zA-Z0-9_]*$/;
       const isValid = regex.test(e.target.value);
       if (isValid) {
         setSearchTerm(e.target.value);
       }
     };

     const handleInputBlur = (e) => {
       const regex = /^[a-zA-Z0-9_]*$/;
       const isValid = regex.test(e.target.value);
       if (!isValid) {
         e.target.classList.add("invalid");
       }
     };

     const handleInputFocus = (e) => {
       e.target.classList.remove("invalid");
     };

     return (
          <div>
               <form onSubmit={handleSearch}>
                    <input type="text" name="search" />
                    <button type="submit">Search</button>
                    {!query && <p>Please enter a search term</p>}
                    {err && <p>Accepted characters: A-Z, a-z, 1-9, and _</p>}
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
