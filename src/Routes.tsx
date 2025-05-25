import { createBrowserRouter } from "react-router-dom";
import Homepage from './pages/HomeView'
import Login from "./pages/loginView";
import SignUp from "./pages/SignupView";
import SignupAction from "./actions/SignupAction";
import LoginAction from "./actions/LoginAction";
import AddInfo from "./pages/InfoView";
import InfoAction from "./actions/InfoAction";
import Auth from "./pages/AuthLayout";

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
    {
        path:'/add_info',
        Component: AddInfo,
        action: InfoAction
    }
])
export default router