import { createBrowserRouter } from "react-router-dom";
import Homepage from './pages/HomeView'
import Login from "./pages/loginView";
import SignUp from "./pages/SignupView";
import SignupAction from "./actions/SignupAction";
import LoginAction from "./actions/LoginAction";
const router = createBrowserRouter([

    {
        path:'/',
        Component:Homepage, 
        
    },
    {
        path:'/auth',
        children:[
                
            {
                path:'/auth/login'
                ,Component:Login,
                action:LoginAction
            }
            ,
            {
                path:'/auth/signup'
                ,Component:SignUp,
                action:SignupAction,
              
                
            }
            
        ]
    },
])
export default router