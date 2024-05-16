import { TypeAnimation } from "react-type-animation";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <div className={styles.container}>
      <img src="./assets/hero-thin.jpg" />
      <p>I'm Rebecca </p>
      <p>Nature and travel photographer</p>
    </div>
  );
};
