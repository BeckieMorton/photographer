import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import styles from "./hero.module.css";

const slides = [
  "./assets/hero.jpg",
  "./assets/hero2.jpg",
  "./assets/hero3.jpg",
  "./assets/hero4.jpg",
];

export default function Fade() {
  const [index, set] = useState(0);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
    delay: index === 0 ? 2000 : 0,
    onRest: (_a, _b, item) => {
      if (index === item) {
        set((state) => (state + 1) % slides.length);
      }
    },
    exitBeforeEnter: true,
  });
  return (
    <div className="flex fill center">
      {transitions((style, i) => (
        <animated.div
          className={styles.bg}
          style={{
            ...style,
            backgroundImage: `url(${slides[i]})`,
          }}
        />
      ))}
    </div>
  );
}
