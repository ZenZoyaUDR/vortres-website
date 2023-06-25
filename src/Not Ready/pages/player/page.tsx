"use client";

import styles from "../../styles/Pages/Player.module.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import Head from "next/head";
import useSWR from "swr";

// Components
const Navbar = dynamic(() => import("../../components/Navbar"));
const Footer = dynamic(() => import("../../components/Footer"));
import Loading from "../../components/Loading";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function Player() {
  const [query, setQuery] = useState<string>("testplayer");
  const [err, setErr] = useState<boolean>(false);

  const { data, error, isLoading } = useSWR(
    `/api/player?search=${query}`,
    fetcher
  );

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const regex = /^[A-Za-z0-9_]+$/;
    const input = e.currentTarget.search.value;
    if (regex.test(input)) {
      setQuery(e.currentTarget.search.value);
      setErr(false);
    } else {
      setErr(true);
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <Head>
        <title>Vortres | Stats</title>
        <link rel="icon" href="/vortres.png" />
      </Head>

      <Navbar />

      <div className={styles.container}>
        <div className={styles.container_input}>
          <form onSubmit={handleSearch}>
            <div>
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
        </div>

        <div className={styles.container_stats}>
          {data ? (
            <div className={styles.card_outer}>
              <div className={styles.card_inner}>
                <p className={styles.title}>{data.username}'s Stats</p>
                <p className={styles.in}>
                  Level: {data.level}
                  <br />
                  Progress: {data.exp}/{data.maxExp}
                </p>
              </div>
            </div>
          ) : (
            <p className={styles.notfound}>
              {query} was not found in the database
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
