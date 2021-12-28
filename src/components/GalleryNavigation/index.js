import { NavLink } from 'react-router-dom';
import './GalleryNavigation.css';

const GalleryNavigation = ({ galleries }) => {
    console.log(galleries)
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
