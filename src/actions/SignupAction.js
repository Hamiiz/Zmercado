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
    
    if (password.length<8){
        errors.password = 'password length must be more than 8!'
        return {errors, status:'400' }
    }
    if(password!=conf){
        errors.password = 'passwords do not match!!';
   
    }
    if (username.length <5 ){
        errors.username = 'Username must be atleast 5 characters!'
    }
    // if (!EmailIsValid(email)){
    //     errors.email = 'Email is used by another Account!!'
    // }

    
    if (Object.keys(errors).length>0){
        return {errors}
    }
    
    else{
        console.log(email)
        let {data,error} = 	await authClient.signUp.email({
            email:email,
			password:password,
            username:username,
			fetchOptions: {
				
			    onError: (ctx) => {
                    console.info(ctx)  
				},	
			},
		});
        if (error){
            console.error(error)
            errors.signUp = error.message
            return{errors}
        }else{
            console.info(`successfull signup  ${data.user.email}` )
            return redirect('/auth/login')
        }
        
        
       
        
    }

}
// async function EmailIsValid(email){
//     return false

// }

    
