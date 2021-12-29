import { useParams, Route } from 'react-router-dom'
import ArtImageTile from '../ArtImageTile'
import ArtDescription from '../ArtDescription';

const GalleryView = ({ galleries }) => {

    // console.log("===", galleries)

    const { galleryId } = useParams();

    const specificGallery = galleries.find(gallery => (
        gallery.galleryid === +galleryId
    ))

    console.log("===", specificGallery.objects);

    specificGallery.objects.map(art => (< ArtImageTile art={art} galleryId={galleryId} />))

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
