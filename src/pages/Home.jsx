import React from "react";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { Test } from "../components/Test";

export const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Test />
    </div>
  );
};
