import React from "react";

import styles from "./AboutMe.module.css";

export const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img src="./assets/about.jpg" alt="about me photo" />
      </div>
      <div className={styles.box}>
        <p>right column</p>
        <p>some info here bla bla</p>
        <p>
          Gastropub master cleanse vinyl dolore praxis. Knausgaard photo booth
          bruh nostrud, blackbird spyplane lyft ut portland. Retro dolor sunt
          occupy hammock. Yr neutra irony commodo nostrud pork belly. Man braid
          aesthetic qui thundercats. Sustainable etsy vexillologist forage.
          Truffaut duis praxis forage.
        </p>
        <p>
          Chia fit literally whatever sriracha helvetica forage quinoa. Cronut
          eu next level deserunt. Art party raw denim hella drinking vinegar
          dreamcatcher stumptown gochujang, culpa prism williamsburg officia
          occupy small batch ut. Normcore consectetur intelligentsia butcher
          bitters mlkshk exercitation ex man braid flexitarian echo park veniam
          live-edge cornhole. Hot chicken in air plant woke aute excepteur.
          Ramps enim do mumblecore taiyaki lomo jawn pariatur tote bag craft
          beer.
        </p>
      </div>
    </div>
  );
};
