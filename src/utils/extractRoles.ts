import { jwtDecode } from "jwt-decode";

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

export default function extractRoles(token:string){
    let data:jwtType|null = jwtDecode(token)
    if (data?.iss=='ZMERC-BY-CYBERNOVA'){
        if (data?.roles.length==0){
            return null;
        }
        return data.roles;
    }
    return null;
}