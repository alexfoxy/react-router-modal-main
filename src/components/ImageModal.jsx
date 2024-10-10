import { useEffect, useState } from 'react'
import { Outlet, useBlocker, useLocation, useNavigate, useParams } from 'react-router-dom'
import { images } from '../data/dummy-data'
import { useVM } from '../hooks/useVM'
import ImageVM from './ImageVM'
import { useParamListeners } from '../hooks/useParamListeners'

const ImageModal = () => {
  const params = useParams()

  const vm = useVM(ImageVM)
  useParamListeners(vm.willFocus, [ 'id' ])

  const navigate = useNavigate()
  let location = useLocation()

  const { id: imageId } = params


  const [ imageData, setImageData ] = useState(null)

  useEffect(() => {
    const image = images.find(({ id }) => imageId == id)

    setImageData(image)
  }, [ imageId ])

  const [ name, setName ] = useState('')

  let blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      name !== "" &&
      currentLocation.pathname !== nextLocation.pathname
  )

  useEffect(() => {
    () => {
      setName('')
    }
  })

  const handleOnClose = () => {
    navigate('..')
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
            <input onChange={(e) => setName(e.target.value)} value={name}></input>

            {blocker.state === 'blocked' && <div>
              <button onClick={() => blocker.proceed()}>Continue save</button>
            </div>}
          </div>
        </div>
      )}

      <Outlet />
    </>
  )
}

export default ImageModal
