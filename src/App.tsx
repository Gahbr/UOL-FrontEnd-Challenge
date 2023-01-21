import { useState } from 'react'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import SignUp from './pages/SignUp/SignUp'

const router = createBrowserRouter([
  {
  path : "/",
  element: <Home/>,
  },
  {
    path : "/signup",
    element: <SignUp/>,
  },
  
])

function App() {
  return (
   <RouterProvider router = {router}/>
  )
}

export default App

