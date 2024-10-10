import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Gallery from './pages/Gallery'
import Index from './pages/Index'
import Root from './pages/Root'
import ImageModal from './components/ImageModal'
import UserModal from './components/UserModal'
import Users from './pages/Users'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Index /> },
      {
        path: '/gallery',
        element: <Gallery />,
        children: [
          {
            path: ':id',
            element: <ImageModal />,
            children: [
              {
                path: 'user',
                element: null,
                children: [
                  {
                    path: ':userId',
                    element: <UserModal />,
                  }
                ]
              },
            ],
          },
        ],
      },
      {
        path: '/users',
        element: <Users />,
        children: [
          {
            path: ':userId',
            element: <UserModal />,
          }
        ]
      },
    ],
  },
])

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router}>

      </RouterProvider>
    </React.StrictMode>
  )
}

export default App
