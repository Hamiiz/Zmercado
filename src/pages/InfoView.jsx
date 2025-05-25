import { useSession } from "@/hooks/useSession";
import { useFetcher } from "react-router-dom";
import Form from "@/components/Form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
export default function AddInfo(){

    let {session, isPending}= useSession()
    let fetcher = useFetcher()

useEffect(() => {
        if (fetcher.data?.errors) {
          const errorMsg = fetcher.data.errors.message;
          if (!toast.isActive(errorMsg)) {
            toast.error(errorMsg, { toastId: errorMsg });
          }
        }
}, [fetcher.data]);



    return (
        <div className="h-screen place-content-center">

        <div className="bg-card w-1/2 mx-auto px-15 py-17 rounded-xl shadow-2xl " >
    

            <h1 className="font-bold text-left text-lg my-3 md:text-2xl">Add your Information</h1>
            <p className="text-sm m-1 text-left"> please add your information below</p>
            <Form className='w-1/2 my-5 mx-auto ' fetcher={fetcher} route='Submit Info' >

                <Label htmlFor='name' className=" text-xs float-left " >Enter your Full name</Label>
                <Input className=" my-3 " id='name' type="text" name='name' required />
                <Label htmlFor='phone' className=" text-xs float-left " >Enter your phone number</Label>
                <Input className="my-3 " id='phone' type="tel" name='phone' />
                <Select required>
                    <SelectTrigger className="w-full scheme-light-dark ">
                        <SelectValue placeholder="What are you doing here" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-300">
                        <SelectItem className="hover:bg-gray-400" value="sell">Sell Items</SelectItem>
                        <SelectItem className="hover:bg-gray-400" value="buy">Buy Items</SelectItem>
                        <SelectItem className="hover:bg-gray-400" value="both">Both</SelectItem>
                    </SelectContent>
                </Select>

            </Form>

        
        
        </div>
        </div>
    )
}