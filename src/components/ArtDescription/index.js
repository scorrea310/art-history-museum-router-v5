import { Link, useParams } from 'react-router-dom'
const ArtDescription = ({ gallery }) => {
    const { artId } = useParams()

    const art = gallery.objects.find(ele => (ele.id === +artId))
    console.log(art, "helol")

    return (
        <>
            <Link to={`/galleries/${gallery.id}`}> Back to Gallery</Link>
            <a href={art.url}> {art.title} </a>
            <p> {art.description}</p>
            <p>{art.technique}</p>
            <p>{art.creditline}</p>
            {art.images.map(image => (
                <img src={image.baseimageurl} alt="" />
            ))}
        </>
    )
}

export default ArtDescription;