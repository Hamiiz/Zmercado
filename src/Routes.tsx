import { createBrowserRouter, redirect } from "react-router-dom";
import Homepage from './pages/HomeView'
import Login from "./pages/loginView";
import SignUp from "./pages/SignupView";
import SignupAction from "./actions/SignupAction";
import LoginAction from "./actions/LoginAction";
import AddInfo from "./pages/InfoView";
import InfoAction from "./actions/InfoAction";
import Auth from "./pages/AuthLayout";

import axios, { AxiosResponse } from "axios";
import { authClient } from "./utils/authClient";

const router = createBrowserRouter([

    {
        path:'/',
        Component:Homepage, 
        
    },
    {
        path:'/auth',
        Component:Auth,
        children:[
                
            {
                path:'/auth/login'
                ,Component:Login,
                action:LoginAction,
                loader:loginLoader
            }
            ,
            {
                path:'/auth/signup'
                ,Component:SignUp,
                action:SignupAction,
                
                
            }
            
        ]
    },
    {
        path:'/add_info',
        Component: AddInfo,
        action:InfoAction,
        loader:infoLoader
    
        
    }
])
export default router

async function getToken(){
    try{
        let response =await axios.get('http://localhost:1000/auth/token',{withCredentials:true})
        return response.status
    }catch(error:any){
        console.log('unAuthorized!')
        return redirect('/auth/login')
      
    }
}
async function infoLoader(){
    let sessionData  =  await getToken()
    return sessionData

    
}
async function loginLoader(){
    let {data} :any =await authClient.getSession()
    if (data?.session){
        return redirect('/')
    }


     
   
    
}
