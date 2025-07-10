import { authClient } from "@/utils/authClient"
import { GiConsoleController } from "react-icons/gi"
export default function ProductBox({product}){
 async   function HandleOtp(){
        const { data, error } = await authClient.emailOtp.sendVerificationOtp({
            email: "hmmhsd37@gmail.com",
            type: "email-verification", // or "email-verification", "forget-password",
           

        })
        console.log(data)
        console.log(error)
    }
    
    return (
        <>
        <div className="card rounded-2xl p-5 bg-gray-100" >
            <div className=" h-2  "   ></div>
            <div>
                <h3> {product.title} </h3>
                <p>{product.desc}</p>

                <button onClick={HandleOtp}>
                    CLick me
                </button>

            </div>

        </div>
        </>
    )

}