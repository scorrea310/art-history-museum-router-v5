import { Link } from 'react-router-dom'


const ArtImageTile = ({ art, galleryId }) => {

  /*
  This component <ArtImageTile /> represents
  each image and the info and link that comes up when you click on image. 

  essentially, the image itself is the link. When you click the image
  our Route handler shows the description and an <a> tag that when clicked
  sends you to the website the image came from.
  
  */
  return (
    <Link to={`/galleries/${galleryId}/art/${art.id}`}>
      <img src={art.images[0].baseimageurl} alt="" />
    </Link>
  )
}

export default ArtImageTile
