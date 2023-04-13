import Image from 'next/image'
import style from './Footer.module.css'

function Footer() {
  return (
    <div className={style.footer_container}>
    <footer className={style.footer}>
      <a
        href="https://vercel.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={style.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={62} height={7} />
        </span>
      </a>
      <p className={style.copyright>© 2023 Vortres</p>
    </footer>
    </div>
  )
}

export default Footer
