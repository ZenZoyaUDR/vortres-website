import Image from 'next/image'
import style from './Footer.module.css'

function Footer() {
  return (
    <div className={style.footer_container}>
    <footer className={style.footer}>
      <p className={style.copyright}>© 2023 Vortres</p>
    </footer>
    </div>
  )
}

export default Footer
