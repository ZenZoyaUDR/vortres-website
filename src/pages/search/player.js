import { useState } from 'react';
import db from '../../lib/db';

export default function Player({ players }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true); // set isLoading to true when search starts
    try {
      const [rows] = await db.query(
        `SELECT * FROM users WHERE username = '%${searchQuery}%'`
      );
      setSearchResults(
        rows.map(row => ({
          id: row.id,
          name: row.name,
          email: row.email,
        }))
      );
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false); // set isLoading to false when search completes
  };

  return (
    <div>
      <h1>Users</h1>
      <div>
        <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      {isLoading ? (
        <p>Loading...</p> // display loading indicator when isLoading is true
      ) : searchResults.length > 0 ? (
        <ul>
          {searchResults.map(user => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}
