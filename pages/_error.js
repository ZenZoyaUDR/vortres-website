import style from '../styles/Error.module.css'
import Navbar from '../components/Navbar/Navbar'

function Error({ statusCode }) {
  return (
    <>
    <Loading />
    <div className={style.errorCountainer}>
      {statusCode
        ? <p>An error {statusCode} occurred on the server</p>
        : <p>An error occurred on client</p>}
    </div>
    </>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error;
