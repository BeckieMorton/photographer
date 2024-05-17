import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className={styles.container}>
      <nav className={`${styles.navbar}`}>
        <Link to="/" className={`${styles.logo}`}>
          Namess Here&nbsp;
        </Link>

        <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
          <li onClick={removeActive}>
            <Link to="/Photos" className={`${styles.navLink}`}>
              Latest Work
            </Link>
          </li>
          <li onClick={removeActive}>
            <Link to="/Photos" className={`${styles.navLink}`}>
              Portfolio
            </Link>
          </li>
          <li onClick={removeActive}>
            <Link to="/About" className={`${styles.navLink}`}>
              About
            </Link>
          </li>
          <li onClick={removeActive}>
            <Link to="/Contact" className={`${styles.navLink}`}>
              Contact
            </Link>
          </li>
        </ul>
        <div
          className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
          onClick={toggleActiveClass}
        >
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
        </div>
      </nav>
    </div>
  );
};
