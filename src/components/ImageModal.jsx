import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { images } from '../data/dummy-data'

const ImageModal = () => {
  const { id: imageId } = useParams()
  const navigate = useNavigate()
  let location = useLocation()

  const [ imageData, setImageData ] = useState(null)

  useEffect(() => {
    const image = images.find(({ id }) => imageId == id)

    setImageData(image)
  }, [ imageId ])

  const handleOnClose = () => {
    navigate('/gallery')
  }

  const goToUser = () => {
    navigate(location.pathname + '/user/123')
  }

  return (
    <>
      {imageData && (
        <div className="modal">
          <div className="modal-content">
            <img src={imageData.fullSize} alt="Full Size" />
            <p>{imageData.details}</p>
            <button onClick={handleOnClose}>Close</button>
            <button onClick={goToUser}>Show User</button>
          </div>
        </div>
      )}
    </>
  )
}

export default ImageModal
