import { useParams, Route } from 'react-router-dom'
import ArtImageTile from '../ArtImageTile'
import ArtDescription from '../ArtDescription';

/*
GalleryView takes in props.galleries and we destrucure galleries on line 9.

useParams() hooks lets us get galleryId from the url.

*/
const GalleryView = ({ galleries }) => {
    const { galleryId } = useParams();

    /*
    we get specificGallery from galleries using find where
    gallery.galleryid === +galleryId
    */
    const specificGallery = galleries.find(gallery => (
        gallery.galleryid === +galleryId
    ))



    /*
    This GalleryView contains the gallery.
    
    */

    return (
        <>
            <h1>Hello from Gallery View.</h1>
            <h2>{specificGallery.name}</h2>
            <Route exact path={`/galleries/:galleryId`}>
                {specificGallery.objects.map(art => < ArtImageTile key={art.id} art={art} galleryId={galleryId} />)}
            </Route>
            <Route path={`/galleries/:galleryId/art/:artId`}>
                <ArtDescription gallery={specificGallery} />
            </Route>
        </>

    )
}

export default GalleryView
