import { AboutMe } from "./components/AboutMe/AboutMe";
import { Footer } from "./components/Footer.jsx/Footer";
import { Header } from "./components/Header.jsx/Header";
import { Hero } from "./components/Hero.jsx/Hero";
import { MyPhotos } from "./components/ReusableComponents/MyPhotos/MyPhotos";

export const App = () => {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <MyPhotos />
        <AboutMe />
        <Footer />
      </div>
    </>
  );
};
