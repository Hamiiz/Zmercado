import api from "@/api/axiosInstance";
import { useTokenStore } from "@/stores/userStore";
import { redirect } from "react-router-dom";

export default async function paymentAction({ request }) {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const address = formData.get("address");
    const city = formData.get("city");
    const amount = formData.get("amount");
    const productIds = formData.get("productIds");
    const paymentM = formData.get("paymentmethod");
    const errors = {}
    if (phone?.length != 9 ) {
        errors.message = 'invalid phone number please enter a valid phone number, start with 9 or 7';
        return { errors };
    }
    const data = { name, email, phone:'0'+phone, address,city,paymentM ,amount,productIds };
    console.log(productIds)
    try {
        const response = await api.post(`/payment/${paymentM}/create`,data,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${useTokenStore.getState().token}`,
                    
            }});


        const checkoutUrl = new Map([
                ["telebirr", response?.data?.checkoutUrl],
                ["chapa", response?.data?.data?.checkout_url],
            ]);
              
              
      
        return redirect(checkoutUrl.get(paymentM))
    }
    catch(e){
        console.log('err',e)
        if (e?.status === 400) {
            errors.message = 'invalid phone number please enter a valid phone number start with 9 or 7'; 
            return { errors };
        }else{
            if(e.response.message){
                errors.message = e.response.message;
                return { errors };
            
            }
            errors.message = e.message;
            return { errors };
        }


        // return redirect('/products')
    }


      

}