import { jwtDecode } from "jwt-decode";
import axios from "axios";

type jwtType =  {
    id:string,
    email: string,
    roles:Array<string>,
    iat: number,
    iss: string,
    aud: string,
    exp: number,
    sub: string


}
export async function getToken(){
    try{
        let response =await axios.get('http://localhost:1000/auth/token',{withCredentials:true})
        return response.data.token
    }catch(error:any){
        console.log('unAuthorized!')
        return null
      
    }
}