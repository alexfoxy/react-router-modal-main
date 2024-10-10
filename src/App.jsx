import React, { createContext, useEffect } from 'react'
import { createBrowserRouter, NavigationType, RouterProvider, useBlocker } from 'react-router-dom'
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
                path: 'user/:userId',
                element: <UserModal />,
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

export const RouterContext = createContext(router)

function App() {

  useEffect(() => {
    router.subscribe((state) => {
      // if (state.historyAction === NavigationType.Pop) {
      //   console.log("WENT BACK")
      // }

      console.log(state)
    })
  }, [])

  // useBlocker(() => {

  // })

  return (
    // <React.StrictMode>
    <RouterContext.Provider value={router}>
      <RouterProvider router={router}>
      </RouterProvider>
    </RouterContext.Provider>
    // </React.StrictMode>
  )
}

export default App
