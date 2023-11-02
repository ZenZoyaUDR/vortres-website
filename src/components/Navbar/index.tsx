"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // Import FontAwesome icons
import style from "./Navbar.module.css";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <nav className={style.nav}>
        <Link id={style.navlogo} href="/">
          Vortres
        </Link>

        <div>
          <ul
            id={style.navbar}
            className={clicked ? style.mobileActive : style.mobile}
          >
            <li>
              <Link href="/creator">Creator</Link>
            </li>
            <li>
              <Link href="/player">Stats</Link>
            </li>
            <li>
              <Link href="/leaderboard">Leaderboard</Link>
            </li>
          </ul>
        </div>

        <div
          id={style.mobile}
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          <FontAwesomeIcon
            icon={clicked ? faTimes : faBars} // Use the FontAwesome icons
            id={style.bar}
            size="2x"
          />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
