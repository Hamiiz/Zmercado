import { createBrowserRouter, redirect } from "react-router-dom";
import Homepage from './pages/HomeView'
import Login from "./pages/loginView";
import SignUp from "./pages/SignupView";
import SignupAction from "./actions/SignupAction";
import LoginAction from "./actions/LoginAction";
import AddInfo from "./pages/InfoView";
import InfoAction from "./actions/InfoAction";
import Auth from "./pages/AuthLayout";
import axios, { AxiosError, AxiosResponse } from "axios";
import { authClient } from "./utils/authClient";
import VerificationPage from "./pages/EmailVirefication";
import VerifyAction from "./actions/VerifyAction";
import { HandleOtp } from "./loaders/sendOtp";
import ProductPage from "./pages/ProductPage";

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
    
        
    },
    {
        path:'/verify_email',
        Component: VerificationPage,
        action:VerifyAction,
        loader: HandleOtp
        
    },
    {
        path:'/products',
        children:[
            {
                index:true,
                Component:ProductPage
            }
        ]

    }
])
export default router

async function getToken(){
    try{
        let response =await axios.get('http://localhost:1000/auth/token',{withCredentials:true})
        return response.data
    }catch(error:any){
        console.log('unAuthorized!')
        return redirect('/auth/login')
      
    }
}
async function infoLoader(){
    let {token}  =  await getToken()
    const {data} =await authClient.getSession()
    let name = data?.user?.name || ''
    try{
        //REPLACE WITH STATE MANAGEMENT
        let response = await axios.get("http://localhost:1000/addroles",{
                 headers:{
                    "Authorization":`Bearer ${token}`,
                    
                 },
              withCredentials:true
             })
  
        if (response?.data.roles.length>0&&(name.length>0)){
            const emailVerified = data?.user?.emailVerified
            if(emailVerified){

                return redirect('/')
            }else{
                return  redirect('/verify_email')

            }
        }
    }catch (err:any){
       return err.message
    }

    
}
async function loginLoader(){
    let {data} :any =await authClient.getSession()
    if (data?.session){
        return redirect('/')
    }

    
}
