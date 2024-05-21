import { Header } from "../components/Header/Header";
import PhotoAlbum from "react-photo-album";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const photos = [
  { src: "./assets/tests1.jpg", width: 800, height: 600 },
  { src: "./assets/tests2.jpg", width: 1600, height: 900 },
  { src: "./assets/tests3.jpg", width: 1600, height: 900 },
  { src: "./assets/tests4.jpg", width: 1600, height: 900 },
];

export const LocationPhotos = () => {
  const [index, setIndex] = useState(-1);
  return (
    <div>
      <Header />
      <h1>Locations</h1>
      <PhotoAlbum
        photos={photos}
        layout="columns"
        columns={2}
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
};
