import { authClient } from "@/utils/authClient"
import { redirect } from "react-router-dom"
export async   function HandleOtp(){
        const userData =await authClient.getSession()
        const email = userData?.data?.user?.email

        if(userData?.data?.user?.emailVerified){
           return redirect('/products')
        }
        const { data, error } = await authClient.emailOtp.sendVerificationOtp({
            email:email,
            type: "email-verification", // or "email-verification", "forget-password",
           

        })
     
        if (error?.status == 400){
            
            return redirect('/auth/login')
        }else{
            return{success:true}
        }
    }