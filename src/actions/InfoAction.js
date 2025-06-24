import { redirect } from "react-router-dom"
import { authClient } from "@/utils/authClient"
//eslint-disable-next-line
import axios from "axios" 

export default async function InfoAction ({request}) {
    let {data} = await authClient.getSession()

    let formData = await request.formData()
    let id = data?.user.id
    let name = formData.get('name')
    let phone = formData.get('phone')
    let select = formData.get('select')
    //eslint-disable-next-line
    let postData = {id,name,phone,select}
   

    let errors = {}
   if (name?.length<5){
    errors.message = 'name must be morethan 5 characters'
    return {errors}
   }
   if (!name.includes(' ')){
    errors.message = 'please enter a full name, have you separated first and last name?'
    return{errors}
   }
   if (phone?.length!=10){
    errors.message='please enter a valid phone number'
    return{errors}
   }

 

    try{
        let response =await axios.get('http://localhost:1000/auth/token',{withCredentials:true})
        let token =  response?.data.token
        response = await axios.post('http://localhost:1000/add_info',postData,{
            withCredentials:true,
            headers:{
                "Authorization":`Bearer ${token}`,   
            }
        })
        if (response.status==200){
            authClient.signOut({});
            return redirect('/auth/login')
        }
    }catch(error){
        if (error.status==403){
             console.log('unAuthorized!')
             await authClient.signOut({})
             return redirect('/auth/login')
        }else{   
            errors.message = error?.message
            return errors
        }
    }
}


