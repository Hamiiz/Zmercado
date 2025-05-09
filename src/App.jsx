// import { useState } from 'react'
import './assets/App.css'
import router from './Routes'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
