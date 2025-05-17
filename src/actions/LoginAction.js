import { redirect } from "react-router"
import { authClient } from "../utils/authClient"
// eslint-disable-next-line no-unused-vars
import axios from "axios" // eslint-ignore
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

        const { data, error } = await authClient.signIn.email({
    
            email:email,
            password:password,
            /**
             * remember the user session after the browser is closed. 
             * @default true
             */
            rememberMe: false
            }, {
              
        })
        if(error){
            errors.message = error.message
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
              
        })
        if(error){
            errors.message = error.message
            return{errors}
        }else{
            console.log(data)
            // try {
                
            //     let tokenData = await axios.get("http://localhost:1000/auth/token",{
            //      withCredentials:true
            //     })
            //     // let token = tokenData.data
                
            //     // let response = await axios.get("http://localhost:1000/getuser",{
            //     // headers:{
            //     //     "Authorization":`Bearer ${token.token}`,
                    
            //     // }    ,
            //     //  withCredentials:true
            //     // })
            // }catch (err){
            //     errors.message = err
            //     return {errors}
            // }
            // const accounts = await authClient.listAccounts();
            // console.log(accounts)
            console.info(`successful SignIn ${data.user.email} `)
            return redirect('/')
        }
    }
    


}


    
