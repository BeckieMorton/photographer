import React from "react";

import { useState } from "react";

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
        <a href="#home" className={`${styles.logo}`}>
          Y.A.
        </a>
        <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
          <li onClick={removeActive}>
            <a href="#home" className={`${styles.navLink}`}>
              Home
            </a>
          </li>
          <li onClick={removeActive}>
            <a href="#home" className={`${styles.navLink}`}>
              Photos
            </a>
          </li>
          <li onClick={removeActive}>
            <a href="#home" className={`${styles.navLink}`}>
              About
            </a>
          </li>
          <li onClick={removeActive}>
            <a href="#home" className={`${styles.navLink}`}>
              Contact
            </a>
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
