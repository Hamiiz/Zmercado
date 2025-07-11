import { anonymousClient,emailOTPClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "http://localhost:1000/auth",
    plugins:[
        anonymousClient()
        ,emailOTPClient()
    ]
    
    
})
