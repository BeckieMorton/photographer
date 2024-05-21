import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Locations } from "../pages/Locations";
import { Photos } from "../pages/Photos";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Locations" element={<Locations />} />
    <Route path="/Photos" element={<Photos />} />
  </>
);

export default routes;
