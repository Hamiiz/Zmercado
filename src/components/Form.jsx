// import { useState, useEffect, useRef } from 'react'
// import { useFetcher } from 'react-router'
import '../assets/form.css'
export default function Form({fetcher,route,children}){
    return(
        <fetcher.Form method='post' action={route=='signup'||route=='login'?`/auth/${route}`:`/${route}`}>
                {children}
                <input type="submit" style={{textTransform:'capitalize'}} value={
                    fetcher.state !== "idle"? 'Processing...':route
                } />
        </fetcher.Form>
    )
    

}

