import './App.css';
import GalleryView from './components/GalleryView';
import GalleryNavigation from './components/GalleryNavigation';
import harvardArt from "./data/harvardArt"
import { Route } from "react-router-dom"

function App() {

  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <Route path={`/galleries/:galleryId`}>
        <GalleryView galleries={harvardArt.records} />
      </Route>
    </div>
  );
}

export default App;
