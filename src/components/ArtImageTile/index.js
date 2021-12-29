import { Link } from 'react-router-dom'


const ArtImageTile = ({ art, galleryId }) => {

  console.log(art.images[0].baseimageurl, "-------")
  return (
    <Link to={`/galleries/${galleryId}/art/${art.id}`}>
      <img src={art.images[0].baseimageurl} alt="" />
    </Link>
  )
}

export default ArtImageTile
