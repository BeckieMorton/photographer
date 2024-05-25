import styles from "./Test.module.css";

export const Test = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img src="image1.jpg" alt="Image 1" />
      </div>
      <div className={styles.box}>
        <img src="image2.jpg" alt="Image 2" />
      </div>
      <div className={styles.box}>
        <img src="image3.jpg" alt="Image 3" />
      </div>
      <div className={styles.box}>
        <img src="image4.jpg" alt="Image 4" />
      </div>
      <div className={styles.box}>
        <img src="image5.jpg" alt="Image 5" />
      </div>
      <div className={styles.box}>
        <img src="image6.jpg" alt="Image 6" />
      </div>
    </div>
  );
};
