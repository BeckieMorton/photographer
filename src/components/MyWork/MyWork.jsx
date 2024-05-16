import { Photogrid } from "../Photogrid/Photogrid";
import styles from "./MyWork.module.css";

export const MyWork = () => {
  return (
    <div className={styles.container}>
      <p>My Captures</p>
      <Photogrid />
    </div>
  );
};
