import { MdPadding } from "react-icons/md"
import { authClient } from "../utils/authClient"
import { toast } from "react-toastify"

export default function AnonLogin(){
    const handleLogin = async (e)=>{
        e.preventDefault()
        try{

            const data = await authClient.signIn.anonymous()
            console.info(data)
        } catch(error){
            toast.error(error)
        }


    }

    return(
        <button 
        onClick={handleLogin}
        className="transition bg-background hover:bg-card"

        style={{

            margin:'0 auto',
            width:'100%',
            fontSize:'.5rem',
            backgroudColor:'lightgrey',
            borderRadius:'5px',
            border:'1px solid grey',
            padding:'.3rem',
            color:'balck'}}
        >
            Login Anonymously
        </button>
    )
}