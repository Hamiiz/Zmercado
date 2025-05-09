export default async function LoginAction ({request}) {
    let formData = await request.formData()
    let emailRusername = formData.get('username')
    let email = null
    let username = null
    let password = formData.get('password')
    let errors = {}
    emailRusername?.includes('@')?email=emailRusername:emailRusername?.length>0?
    username=emailRusername:errors.username='No Email or username entered';
    if(Object.keys(errors).length>0){
        return{errors:errors,status:400}
    }
    return{isLogged:true,username:username,email:email}


}

    
