function Error({ statusCode }) {
  return (
    <div className="error-countainer">
      {statusCode
        ? <p>An error ${errorCode} occurred on the server</p>
        : <p>An error occurred on client</p>}
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error;
