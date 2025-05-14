import { redirect } from "react-router"
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
        errors.username='No Email or username entered';
        
    }

    if(checkObjectLength(errors)>0){
        return{errors:errors,status:400}
    }

    if (isEmail){

        const { data, error } = await authClient.signIn.email({
    
            email:email,
            password:password,
            /**
             * remember the user session after the browser is closed. 
             * @default true
             */
            rememberMe: false
            }, {
                onError:(ctx)=>{
                    console.error(ctx)
                },
                onSuccess:(ctx)=>{
                    console.info(ctx)
                }
        })
        if(error){
            errors.signIn = error.message
            return{errors}
        }else{
            console.info(`successful SignIn ${data.user.email} `)
            return redirect('/')
        }
    } else{
        const { data, error } = await authClient.signIn.username({
    
            username:username,
            password:password,
            /**
             * remember the user session after the browser is closed. 
             * @default true
             */
            rememberMe: false
            }, {
                onError:(ctx)=>{
                    console.error(ctx)
                },
                onSuccess:(ctx)=>{
                    console.info(ctx)
                }
        })
        if(error){
            errors.signIn = error.message
            return{errors}
        }else{
            console.info(`successful SignIn ${data.user.email} `)
            return redirect('/')
        }
    }
    


}
function checkObjectLength(object){
    return Object.keys(object).length
}

    
