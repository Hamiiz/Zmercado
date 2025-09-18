// import { useState, useEffect, useRef } from 'react'
// import { useFetcher } from 'react-router'
import '../assets/form.css'
import { Button } from "@/components/ui/button"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"


export default function Form({className,id,fetcher,route,encType,buttonText,children}){
    return(
        <fetcher.Form method='post' id={id||''} encType={encType?encType:"application/x-www-form-urlencoded"} className={className} action={route=='signup'||route=='login'?`/auth/${route}`:`/${route}`}>
                {children}
              
                <input type="submit" style={{textTransform:'capitalize'}} 
                className='p-2 w-full '
                value={
                    fetcher.state !== "idle"? 'Processing...':buttonText||route
                } disabled={
                    fetcher.state !== 'idle'?true:false
                } />
        </fetcher.Form>
    )
    

}

