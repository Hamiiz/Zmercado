// import axios from 'axios'
import { redirect } from 'react-router-dom'
import { authClient } from '../utils/authClient'
export default async function SignupAction ({request}) {


    let formData = await request.formData()
    let email = formData.get('email')
    let username = formData.get('username')
    let password = formData.get('password')
    let conf = formData.get('cpassword')
    let errors = {}
    
    if (username.length <5 ){
        errors.message = 'Username must be atleast 5 characters!'
        return{errors}

    }
    if (password.length<8){
        errors.message = 'password length must be more than 8!'
        return {errors}
    }
    if(password!=conf){
        errors.message = 'passwords do not match!!';
        return{errors}

   
    }    
    else{
 


    let {data,error} = 	await authClient.signUp.email({
        email:email,
        password:password,
        username:username,
        fetchOptions: {
            
            onError: (ctx) => {
                ctx.message?
                errors.message =  ctx.message:
                errors.message = 'Server Error Occured'
             
            },	
        },
    });
    if (!error){
        console.log( data)
    return redirect('/auth/login')
    }else{
        return {errors}
    }


        
        
        
       
        
    }

}
// async function EmailIsValid(email){
//     return false

// }

    
