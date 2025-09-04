import { createBrowserRouter, redirect } from "react-router-dom";
import Homepage from './pages/HomeView'
import Login from "./pages/loginView";
import SignUp from "./pages/SignupView";
import SignupAction from "./actions/SignupAction";
import LoginAction from "./actions/LoginAction";
import AddInfo from "./pages/InfoView";
import InfoAction from "./actions/InfoAction";
import Auth from "./pages/layouts/AuthLayout";
import { authClient } from "./utils/authClient";
import VerificationPage from "./pages/EmailVirefication";
import VerifyAction from "./actions/VerifyAction";
import { HandleOtp } from "./loaders/sendOtp";
import ProductPage from "./pages/ProductPage";
import extractRoles from "./utils/extractRoles";
import AddProducts from "./pages/AddProducts";
import ProductsLayout from "./pages/layouts/ProductsLayout";
import productAction from "./actions/productAction";
import { getToken } from "./utils/tokenManager";
import { useTokenStore } from "./stores/userStore";
import ProductLoader from "./loaders/productsLoader";
import ProductFallBack from "./pages/layouts/ProductFallback";
import ItemPage from "./pages/ItemPage";
import itemLoader from "./loaders/itemLoader";
import PaymentChecout from "./pages/PaymentChecout";
import paymentAction from "./actions/PaymentAction";


const router = createBrowserRouter([

    {
        path:'/',
        Component:Homepage, 
        loader:async()=>{
            let token = await getToken()
            return token
        }
        
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
        path:'/refetch-token',
        loader:refetchLoader,
        element:<h1>loading</h1>
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
        Component: ProductsLayout,

        children:[
            {
                index:true,
                Component:ProductPage,
                loader:ProductLoader,
                HydrateFallback: ProductFallBack,

            },
            {
                path:'sell',
                Component:AddProducts
                ,action:productAction

            },
            {
                path:'item',
                Component: ItemPage,
                loader: itemLoader

            }

        ]

    },
    {
        path:'/paymentCheckout',
        Component: PaymentChecout,
        action: paymentAction
    }
    ,
    {
        path:'/payments/success/:txn_id',
        element:<h1>success </h1>,
    
    }
])
export default router




async function infoLoader(){
    let token =  await getToken()
    console.log('infoad', token)
    if (!token){
        return redirect('/auth/login')
    }
    localStorage.setItem('token',token)
    let roles:Array<string>|null  = extractRoles(token);
    const {data} =await authClient.getSession()
    let name = data?.user?.name || ''  
        if (roles!=null &&(name.length>0)){
            const emailVerified = data?.user?.emailVerified
            if(emailVerified){

                return redirect('/')
            }else{
                return  redirect('/verify_email')

            }
        }

    
}

async function loginLoader(){
    let {data} :any =await authClient.getSession()
    if (data?.session){
        return redirect('/')
    }

    
}
// eslint-disable-next-line
async function refetchLoader({request}){
    const token = await getToken()
    const url = new URL(request.url);
    const next = url.searchParams.get('next') || '/products';


    if (token) {
        localStorage.setItem('token',token)
        useTokenStore.getState().setToken(token);
        return redirect(next);
    } else {
        return redirect(`/auth/login`);
    }
    

}