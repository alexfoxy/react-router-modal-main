import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import UserModal from '../components/UserModal'

const Users = () => {
  const navigate = useNavigate()

  const viewUser = (id) => {
    navigate('/users/' + id)
  }

  return (
    <div className="gallery">
      {[ 1, 2, 3, 4, 5, 6 ].map((userId) => (
        <button
          key={userId}
          className="gallery-item"
          onClick={() => viewUser(userId)}
        >
          <h3>User: {userId}</h3>
        </button>
      ))}

      <Outlet />
    </div>
  )
}

export default Users
