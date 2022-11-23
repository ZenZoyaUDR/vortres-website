import Image from 'next/image'
import style from './Footer.module.css'

function Footer() {
  return (
    <footer className={style.footer}>
      <a
        href="https://vercel.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <span className={style.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  )
}

export default Footer
