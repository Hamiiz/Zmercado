import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ThemeToggle from "@/components/theme-toggler";

import { ToastContainer } from 'react-toastify'
import './assets/index.css'
import App from './App.jsx'
if(import.meta.env.MODE == 'development'){
  
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
}else{
  createRoot(document.getElementById('root')).render(

  <>
      
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
    </>
    
  ,
  )
  
}

