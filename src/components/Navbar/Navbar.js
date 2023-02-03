import { useState } from 'react';
import Link from 'next/link';
import style from './Navbar.module.css';

function Navbar() {
     const [clicked, setClicked] = useState(false);

     return (
          <>
               <nav className={style.nav}>
                    <Link id={style.navlogo} href="/">Starite</Link>

                    <div>
                         <ul
                              id={style.navbar}
                              className={clicked ? style.mobileActive : style.mobile}
                         >
                              <li>
                                   <Link href="/">
                                        Home
                                   </Link>
                              </li>
                              <li>
                                   <Link href="/creator">
                                        Creator
                                   </Link>
                              </li>
                              <li>
                                   <Link href="/projects">
                                        Projects
                                   </Link>
                              </li>
                         </ul>
                    </div>

                    <div id={style.mobile} onClick={() => {
                         setClicked(!clicked)
                    }}>
                         <i
                              id={style.bar}
                              className={clicked ? "fas fa-times" : "fas fa-bars"}
                         ></i>
                    </div>
               </nav>
          </>
     );
}

export default Navbar;
