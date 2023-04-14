import { useState } from 'react';

export default function Player() {
     const [res, setRes] = useState(0);

     const handleSearch = (event) => {
          event.preventDefault();

          const result = `${event.target.panjang.value} * ${event.target.lebar.value}`;
          setRes(result);
     }

     return (
          <>
               <Head>
                    <title>Vortres | Stats</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>

               <Navbar />

               <div>
                    <form onSubmit={handleSearch}>
                         <div>
                              <input
                                   type="number"
                                   placeholder="Search..."
                                   name="panjang"
                              />
                              <input
                                   type="number"
                                   placeholder="Search..."
                                   name="lebar"
                              />
                              <button type="submit">
                                   Cal
                              </button>
                              {!res && <p>Please enter a search term</p>}
                         </div>
                    </form>

                    {res ? (
                         <ul>
                              <li key={res}>
                                   Selesai - Level: {res}
                              </li>
                         </ul>
                    ) : (
                         <div>Error</div>
                    )}
               </div>
               <Footer />
          </>
     );
}
