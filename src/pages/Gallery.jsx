import { Outlet } from 'react-router-dom'
import { images } from '../data/dummy-data'
import { useVM } from '../hooks/useVM'
import GalleryVM from './GalleryVM'
import { useParamListeners } from '../hooks/useParamListeners'

const Gallery = () => {
  const vm = useVM(GalleryVM)
  useParamListeners(vm.willFocus)

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <button
          key={image.id}
          className="gallery-item"
          onClick={() => vm.showImage(image.id)}
        >
          <img src={image.thumbnail} alt={`Thumbnail ${index + 1}`} />
        </button>
      ))}

      <Outlet />
    </div>
  )
}

export default Gallery
