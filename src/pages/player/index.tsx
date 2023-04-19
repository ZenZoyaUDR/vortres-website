import styles from "../../styles/Pages/Player.module.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import Head from "next/head";
import useSWR from "swr";

// Components
const Navbar = dynamic(() => import("../../components/Navbar"));
const Footer = dynamic(() => import("../../components/Footer"));

interface PlayerData {
  id: number;
  username: string;
  level: number;
}

export default function Player() {
  const [query, setQuery] = useState<string>("");
  const [err, setErr] = useState<boolean>(false);

  const { data, error, isLoading } = useSWR<PlayerData>(
    `/api/players?search=${query}`,
    async (url) => {
      const response = await fetch(url);
      return response.json();
    }
  );

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const regex = /^[A-Za-z0-9_]+$/;
    const input = event.currentTarget.search.value;
    if (regex.test(input)) {
      setQuery(event.currentTarget.search.value);
      setErr(false);
    } else {
      setErr(true);
    }
  };

  return (
    <>
      <Head>
        <title>Vortres | Stats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div>
        <form onSubmit={handleSearch}>
          <div className={styles.container}>
            <input
              type="text"
              placeholder="Search..."
              name="search"
              className={styles.input}
            />
            <button className={styles.button} type="submit">
              Search
            </button>
            {!query && <p>Please enter a search term</p>}
            {err && <p>Accepted characters: A-Z, a-z, 1-9, and _</p>}
          </div>
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
      <Footer />
    </>
  );
}
