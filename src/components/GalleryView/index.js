import { useParams } from 'react-router-dom'

const GalleryView = ({ galleries }) => {

    console.log(galleries)

    const { galleryId } = useParams();

    const specificGallery = galleries.find(gallery => (
        gallery.galleryid === +galleryId
    ))

    console.log(specificGallery);

    return (
        <h1>Hello from Gallery View.</h1>
    )
}

export default GalleryView