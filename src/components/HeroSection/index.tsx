import style from "./HeroSection.module.css";
import Background from "../Background Engine";

function HeroSection() {
  return (
    <>
      <div className={style.heroContainer}>
        <h1>Hello! :)</h1>
        <p>This website is not finish yet, come back later!</p>
      </div>
      <div className={style.heroBg}>
        <Background />
      </div>
    </>
  );
}

export default HeroSection;
