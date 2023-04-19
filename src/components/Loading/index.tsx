import style from "./Loading.module.css";

function Loading() {
  return (
    <div className={style.loadingContainer}>
      <div className={style.loadingSlider}>
        <div className={style.loadingLine} />
        <div className={style.sublineInc} />
        <div className={style.sublineDec} />
      </div>
    </div>
  );
}

export default Loading;
