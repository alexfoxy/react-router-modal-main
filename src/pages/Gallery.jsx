import React from 'react'
import { useNavigate } from 'react-router-dom'
import { images } from '../data/dummy-data'
import ImageModal from '../components/ImageModal'
import UserModal from '../components/UserModal'

const Gallery = () => {
  const navigate = useNavigate()

  const viewImage = (image) => {
    const id = image.id
    navigate('/gallery/' + id)
  }

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <button
          key={image.id}
          className="gallery-item"
          onClick={() => viewImage(image)}
        >
          <img src={image.thumbnail} alt={`Thumbnail ${index + 1}`} />
        </button>
      ))}

      <ImageModal />
      <UserModal />
    </div>
  )
}

export default Gallery
