import { Button } from "@/components/ui/button"
import { authClient } from "../utils/authClient";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';


export default function Logout({session}){
    let navigate = useNavigate()
    const handleLogout = async ()=>{
        try{

            await authClient.signOut({  });
            navigate('/auth/login')
        }catch(err){
            toast.error(err)
        }
    }
    return(
        <>
        {session&& <Button onClick={handleLogout} className='relative z-5 bg-gray-700 text-white hover:bg-gray-600  '  >Logout</Button>}
        </>
    )

}