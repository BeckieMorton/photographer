import { Photocard } from "./PhotoCard";
import styles from "./Photogrid.module.css";

export const Photogrid = () => {
  return (
    <>
      <div className={styles.genreContainer}>
        <div className={styles.genreBox}>
          <Photocard cardText={"Africa"} cardImage={"test1"} />
        </div>
        <div className={styles.genreBox}>
          <Photocard cardText={"Africas"} cardImage={"test2"} />
        </div>
        <div className={styles.genreBox}>
          <Photocard cardText={"Photography"} cardImage={"test3"} />
        </div>
        <div className={styles.genreBox}>
          <Photocard cardText={"Greek Roman Art"} cardImage={"test4"} />
        </div>
        <div className={styles.genreBox}>
          <Photocard cardText={"Greek Roman Art"} cardImage={"test5"} />
        </div>
        <div className={styles.genreBox}>
          <Photocard cardText={"Greek Roman Art"} cardImage={"tests1"} />
        </div>
      </div>
    </>
  );
};
