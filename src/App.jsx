import { Footer } from "./components/Footer.jsx/Footer";
import { Header } from "./components/Header.jsx/Header";
import { Landing } from "./components/Landing.jsx/Landing";

export const App = () => {
  return (
    <>
      <div>
        <Header />
        <Landing />
        <Footer />
      </div>
    </>
  );
};
