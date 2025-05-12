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
        //check password here
        if(email=='hm@mh.com'){
            errors.username = 'have entered invalid email!'
        }
        if (password == 'popopopo' ){
            errors.password= 'incorrect password entered'
        }
    }else{
        //check password here
        
    }


    if(checkObjectLength(errors)>0){
        return{errors:errors,status:400}
    }

    return{isLogged:true,username:username,email:email}


}
function checkObjectLength(object){
    return Object.keys(object).length
}

    
