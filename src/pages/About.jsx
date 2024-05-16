import React from "react";
import { Header } from "../components/Header/Header";
import { AboutMe } from "../components/AboutMe/AboutMe";

export const About = () => {
  return (
    <div>
      <Header />
      <h1>About me</h1>
      <AboutMe />
    </div>
  );
};
