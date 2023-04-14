import '../styles/Global.css';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('../components/Footer/Footer'));

function App({ Component, pageProps }) {
  return (
           <>
             <Component {...pageProps} />
             <Footer />
           </>
         )
}

export default App
