import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'

export let navigations = 0

const Root = () => {
  const location = useLocation()

  // useEffect(() => {
  //   navigations += 1
  // }, [ location ])

  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}

export default Root
