import { useContext, useEffect, useState } from 'react'
import { useMatches, useNavigate, useParams, useResolvedPath, useRouteError } from 'react-router-dom'
import { images } from '../data/dummy-data'
import { useVM } from '../hooks/useVM'
import ImageVM from './ImageVM'
import { RouterContext } from '../App'
import UserVM from './UserVM'
import { useParamListeners } from '../hooks/useParamListeners'

const UserModal = () => {
  const { userId } = useParams()
  const navigate = useNavigate()

  const vm = useVM(UserVM)
  useParamListeners(vm.willFocus, [ 'userId' ])

  const handleOnClose = () => {
    navigate('..')
  }

  return (
    <>
      {userId && (
        <div className="modal">
          <div className="modal-content">
            <h4>{userId}</h4>
            <button onClick={handleOnClose}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}

export default UserModal
