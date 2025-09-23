import {  useFetcher } from "react-router-dom";
import Form from "@/components/Form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useSession } from "@/hooks/useSession";
//eslint-disable-next-line
import axios from "axios";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AddInfo() {
  let fetcher = useFetcher();
  let { session } = useSession();
  useEffect(() => {
    if (fetcher.data?.error) {
      const errorMsg = fetcher.data.error.message;
      if (!toast.isActive(errorMsg)) {
        toast.error(errorMsg, { toastId: errorMsg });
      }
    }
  }, [fetcher.data]);

  const [name, setName] = useState("");

  useEffect(() => {
    if (session?.user?.name) {
      setName(session.user.name);
    }
  }, [session]);

  return (
    <div className="h-screen place-content-center">
      <div className="bg-card w-1/2 mx-auto px-15 py-17 rounded-xl shadow-2xl ">
        <h1 className="font-bold text-left text-lg my-3 md:text-2xl">
          Add your Information
        </h1>
        <p className="text-sm m-1 text-left">
          {" "}
          please add your information below
        </p>
        <Form
          className="w-1/2 my-5 mx-auto "
          fetcher={fetcher}
          route="add_info"
        >
          <Label htmlFor="name" className=" text-xs float-left ">
            Enter your Full name
          </Label>
          <Input
            className=" my-3 "
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Label htmlFor="phone" className=" text-xs float-left ">
            Enter your phone number
          </Label>
          <Input className="my-3 " id="phone" 
          defaultValue={900123456}
          type="tel" name="phone" />
          <Select name="select" required>
            <SelectTrigger className="w-full scheme-light-dark ">
              <SelectValue placeholder="What are you doing here" />
            </SelectTrigger>
            <SelectContent className="bg-gray-300" name="role">
              <SelectItem className="hover:bg-gray-400" value="1">
                Sell Items
              </SelectItem>
              <SelectItem className="hover:bg-gray-400" value="3">
                Buy Items
              </SelectItem>
              <SelectItem className="hover:bg-gray-400" value="13">
                Both
              </SelectItem>
            </SelectContent>
          </Select>
        </Form>
      </div>
    </div>
  );
}
