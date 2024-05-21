import { Header } from "../components/Header/Header";
import { MainLocations } from "../components/MainLocations/MainLocations";

//gallery made from scratch with grid for headers of different locations, clickable images

export const Locations = () => {
  return (
    <>
      <Header />
      <h1>Locations</h1>
      <MainLocations />
    </>
  );
};
