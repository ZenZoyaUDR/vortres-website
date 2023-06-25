import style from "../styles/Pages/Error.module.css";

function NotFound() {
  return (
    <div className={style.error_container}>
      <p className={style.error_code}>404</p>
      <p className={style.error_message}>
        The page you are looking for does not exist or is temporarily
        unavailable.
      </p>
      <a className={style.mesage_goback} href="/">
        Go To Homepage
      </a>
    </div>
  );
}

export default NotFound;
