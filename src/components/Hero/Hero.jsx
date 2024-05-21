import Fade from "./Fade";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <img src="./assets/hero.jpg" alt="hero images" />
        {/* <p>I'm Rebecca </p>
      <p>Nature and travel photographer</p>
        {/* <Fade /> */}
      </div>
    </>
  );
};
