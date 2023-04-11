import { useState } from 'react';
import useSWR from 'swr';

import Tooltip from '../components/Tooltip/Tooltip';

export default function Player() {
     const [query, setQuery] = useState("");

     const { data, error, isLoading } = useSWR(`/api/players?search=${query}`, async (url) => {
          const response = await fetch(url);
          return response.json();
     });

     const handleInputChange = (e) => {
       const regex = /^[a-zA-Z0-9_]*$/;
       const isValid = regex.test(e.target.value);
       if (isValid) {
         setQuery(e.terget.value)
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
               <div>
                     <input
                       type="text"
                       value={query}
                       onChange={handleInputChange}
                       onBlur={handleInputBlur}
                       onFocus={handleInputFocus}
                     />
                    {!searchTerm && (
                      <Tooltip text="Please enter a search term">
                        <button disabled>Search</button>
                      </Tooltip>
                    )}
                    {searchTerm && (
                      <button onClick={() => console.log("search clicked")}>Search</button>
                    )}
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
