import { authClient } from "@/utils/authClient"

export default async function InfoAction ({request}) {
    console.log("VerifyAction triggered");
    let formData = await request.formData();
    const user = await getUser()
    const otp = formData.get('otp')
    console.log(request)
    let status = {}
    const {data,error} =await authClient.emailOtp.verifyEmail({
        email:user?.email,
        otp:otp
    })
    if(error){
        status.error=error?.message
        return status;
    }
    else if (data?.status){
        status.success = 'Verified'
        return status

    }else{

        status.error = 'Unknown error occucred'
        return status
    }

   
    
}

//replace with state
async function getUser(){
    const {data} = await authClient.getSession()
    return data?.user
}