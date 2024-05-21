import styles from "./MainLocations.module.css";

export const MainLocations = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p className={styles.placeTxt}>Cuba</p>
        <img className={styles.genreImage} src={`./assets/tests1.jpg`} />
      </div>
      <div className={styles.box}>
        <p className={styles.placeTxt}>Faroe Islands</p>
        <img className={styles.genreImage} src={`./assets/tests1.jpg`} />
      </div>
      <div className={styles.box}>
        <p className={styles.placeTxt}>South East Asia</p>
        <img className={styles.genreImage} src={`./assets/tests1.jpg`} />
      </div>
      <div className={styles.box}>
        <p className={styles.placeTxt}>Ukraine and Eastern Europe</p>
        <img className={styles.genreImage} src={`./assets/tests1.jpg`} />
      </div>
      <div className={styles.box}>
        <p className={styles.placeTxt}>Australia and New Zealand</p>
        <img className={styles.genreImage} src={`./assets/tests1.jpg`} />
      </div>
      <div className={styles.box}>
        <p className={styles.placeTxt}>Germany</p>
        <img className={styles.genreImage} src={`./assets/tests1.jpg`} />
      </div>
      <div className={styles.box}>
        <p className={styles.placeTxt}>place name</p>
        <img className={styles.genreImage} src={`./assets/tests1.jpg`} />
      </div>
    </div>
  );
};
