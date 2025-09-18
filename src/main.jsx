import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ThemeToggle from "@/components/theme-toggler";

import { ToastContainer } from 'react-toastify'
import './assets/index.css'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>

    
    <App />
      <div className=" absolute  ">
      <ToastContainer 
        className={'z-50  '}
        position="top-right" 
        closeOnClick
        draggable={false}
        
        
        />
      </div>
      <ThemeToggle />
  

  </StrictMode>,
)

