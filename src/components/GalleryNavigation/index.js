import { NavLink } from 'react-router-dom';
import './GalleryNavigation.css';

const GalleryNavigation = ({ galleries }) => {

    /*
        NavLink is Link but it auto takes the .active class.
        Line 16 creates a NavLink for every gallery(object)
        in the galleries array and will be rendered with 
        the GalleryNavigation component.

        <NavLink to={`/galleries/${gallery.id}`}
            - will take you to /galleries/${gallery.id}.
            -we handle what to render/show using Route.

    */

    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink exact to='/'>Home</NavLink>
            {galleries.map(gallery => (
                <NavLink style={{ paddingLeft: '10px' }} key={gallery.id} to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
            ))}
        </nav>
    )
}

export default GalleryNavigation
