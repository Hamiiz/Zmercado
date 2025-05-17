import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ToastContainer } from 'react-toastify'
import './assets/index.css'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <ToastContainer 
      position="top-right" 
      closeOnClick
      draggable={false}
  
    />
  </StrictMode>,
)

