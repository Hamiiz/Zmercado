import { redirect } from "react-router-dom"
import { authClient } from "../utils/authClient"

export default async function LoginAction ({request}) {
    let formData = await request.formData()
    let emailRusername = formData.get('username')
    let email = null
    let username = null
    let password = formData.get('password')
    let isEmail = false 
    let errors = {}
    if (emailRusername?.includes('@')){
        email=emailRusername
        isEmail=true;
        
    } else if (emailRusername?.length>0&& !emailRusername?.includes('@')){
        username=emailRusername
    }else{
        errors.message='No Email or username entered';
        return {errors}
        
    }


    if (isEmail){
//eslint-disable-next-line
        const { data, error } = await authClient.signIn.email({
    
            email:email,
            password:password,
            rememberMe: false,
            fetchOptions: {
            
                onError: (ctx) => {
                    ctx.error?.message?

                    errors.message =  ctx.error.message:
                    errors.message = 'Server Error Occured'
                    return{errors}
                },	
            
                onSuccess:()=>{
                    
                    return redirect('/add_info')
                }
            },
            }, {
              
        })
        
    } else{
        //eslint-disable-next-line 
        const { data, error } = await authClient.signIn.username({
            username:username,
            password:password,
            rememberMe: false,
            fetchOptions: {
            
                onError: (ctx) => {
                    ctx.error?.message?

                    errors.message =  ctx.error.message:
                    errors.message = 'Server Error Occured'
                    return{errors}
                },	
                onSuccess:()=>{
                 
                    console.info('success log')
                    return redirect('/add_info')
                }
            },
        
            })
       
    }
    


}


    
