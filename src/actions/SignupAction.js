export default async function SignupAction ({request}) {
    let formData = await request.formData()
    let email = formData.get('email')
    let username = formData.get('username')
    let password = formData.get('password')
    let conf = formData.get('cpassword')
    let errors = {}
    
    if (password.length<6){
        errors.password = 'password length must be more than 6!'
        return {errors, status:'400' }
    }
    if(password!=conf){
        errors.password = 'passwords do not match!!';
   
    }
    if (!EmailIsValid(email)){
        errors.email = 'Email is used by another Account!!'
    }
    
    if (Object.keys(errors).length>0){
        return {errors}
    }
    
    else{
        return{isLogged:true,username:username,email:email}
    }

}
async function EmailIsValid(email){
    return false

}

    
