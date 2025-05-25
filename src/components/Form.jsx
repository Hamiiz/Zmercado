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


export default function Form({className,fetcher,route,children}){
    return(
        <fetcher.Form method='post' className={className} action={route=='signup'||route=='login'?`/auth/${route}`:`/add_info`}>
                {children}
              
                <input type="submit" style={{textTransform:'capitalize'}} value={
                    fetcher.state !== "idle"? 'Processing...':route
                } disabled={
                    fetcher.state !== 'idle'?true:false
                } />
        </fetcher.Form>
    )
    

}

