import style from '../styles/Pages/Error.module.css'

function NotFound() {
     return (
          <div className={style.error_container}>
               <p className={style.error_message}>Sorry, the page you looking for does not exist.</p>
          </div>
     )
}

export default NotFound
