import style from '../styles/Pages/Error.module.css'
import Navbar from '../components/Navbar/Navbar'

function Error({ statusCode }) {
  return (
    <>
      <Navbar />
      <div className={style.errorCountainer}>
        {statusCode
          ? <div>
            <p className={style.errorMessage}>Sorry, something went wrong</p>
            <p className={style.errorCode}>{statusCode} Error</p>
          </div>
          : <p className={style.errorMessage}>An error occurred on client</p>}
      </div>
    </>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error;
