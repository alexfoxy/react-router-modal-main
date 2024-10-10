import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { images } from '../data/dummy-data'

const UserModal = () => {
  const { userId } = useParams()
  const navigate = useNavigate()

  const handleOnClose = () => {
    navigate(-1)
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
