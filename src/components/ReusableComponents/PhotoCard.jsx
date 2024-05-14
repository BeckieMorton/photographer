import styles from "./PhotoCard.module.css";

export const PhotoCard = ({ cardText, handleClick, cardImage }) => {
  return (
    <div className={styles.container}>
      <p className={styles.genreText}>{cardText}</p>
      <img className={styles.genreImage} src={`./assets/${cardImage}.jpg`} />
    </div>
  );
};
