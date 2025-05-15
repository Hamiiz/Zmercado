import { GiConsoleController } from "react-icons/gi";
import { authClient } from "../utils/authClient";

export function useSession(){
    const { 
        data:session, 
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()
    return{session}
}
