export default async function SignupAction ({request}) {
    let formData = await request.formData()
    let email = formData.get('email')
    let password = formData.get('password')
    let conf = formData.get('cpassword')
    let errors = {}
 
    if(password!=conf){
        errors.password = 'passwords do not match!!';
   
    }
    if (Object.keys(errors).length>0){
        return {errors}
    }
    
    else{
    return { status:200,isLogged:true}
    }

}

    
