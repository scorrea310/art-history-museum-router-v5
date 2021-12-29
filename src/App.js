import './App.css';
import GalleryView from './components/GalleryView';
import GalleryNavigation from './components/GalleryNavigation';
import harvardArt from "./data/harvardArt"
import { Route, Switch } from "react-router-dom"

/*
Route is almost like a route handler when the path is matched then we render
a specfic view (single or set of components.)

- <GalleryNavigation component is the set of navigation links.

*/

function App() {

  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <Switch>
        <Route exact path='/'>
        </Route>
        <Route path={`/galleries/:galleryId`}>
          <GalleryView galleries={harvardArt.records} />
        </Route>
        <Route>
          <h1>Page Not Found</h1>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
