
// eslint-disable-next-line no-unused-vars
import axios from "axios" // eslint-ignore
export default async function InfoAction ({request}) {
    let formData = await request.formData()
    let name = formData.get('name')
    let phone = formData.get('phone')
    
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
   errors.message='info added successfully!!'
   return{errors}

    

      
    
    


}


    
