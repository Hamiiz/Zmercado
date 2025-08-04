import { useFetcher } from "react-router-dom";
import Form from "@/components/Form";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTokenStore } from "@/stores/userStore";
import { useState } from "react";
export default function AddProducts() {
  const fetcher = useFetcher();
  const [preview, setPreview] = useState();
  const{token} = useTokenStore()


  const handleImage = (e) => {
    //eslint-disable-next-line
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-5/6 mx-auto my-3 rounded-xl p-10 bg-gray-200 dark:bg-background">
      <h1 className="text-xl">Post Item</h1>
      <Form
        fetcher={fetcher}
        encType="multipart/form-data"
        className={""}
        route="products/sell"
      >
        <div className="w-1/2 my-5 text-left mx-auto">
          <Label for="prodName">What Item Are you Selling</Label>
          <Input
            type="text"
            name="prodName"
            className="border-inherit "
            maxLength={100}
            required
          ></Input>
        </div>
        <div className="w-1/2 my-5 text-left mx-auto">
          <Label>Write A description About your product</Label>
          <textarea
            name="prodDesc"
            className="block border-1 w-full"
            id=""
          ></textarea>
        </div>

        <div className="w-1/2 my-5 text-left mx-auto">
          <Label for="select">Item Condition</Label>
          <Select name="select" className={""} required>
            <SelectTrigger className="w-full scheme-light-dark ">
              <SelectValue placeholder="What are you doing here" />
            </SelectTrigger>
            <SelectContent className="bg-gray-300" name="role">
              <SelectItem className="hover:bg-gray-400" value="new">
                New
              </SelectItem>
              <SelectItem className="hover:bg-gray-400" value="used">
                Used
              </SelectItem>
              <SelectItem className="hover:bg-gray-400" value="defective">
                Defective
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-1/2 my-5 text-left mx-auto">
          <Label for="prodPrice">How much is your product</Label>
          <Input
            name="prodPrice"
            className=" "
            type="number"
            id=""
            required
          ></Input>
        </div>
        <div className="w-1/2 my-5 text-left mx-auto">
          <Label for="prodBrand">What Brand is the product</Label>
          <Input name="prodBrand" className=" "  id="" required></Input>
        </div>
        <div className="w-1/2 my-5 text-left mx-auto">
          <Label for="prodStock">Enter your Stock</Label>
          <Input
            name="prodStock"
            className=" "
            id=""
            type="number"
            required
          ></Input>
        </div>
        <input type="hidden" name="token" value={token} />
        <div className="w-fit my-5 text-left mx-auto">
          <label>Product Image</label>
          
          <Input
            type="file"
            accept="image/*"
            onChange={handleImage}
            name="prodImg"
            className="w-fit bg-gray-200"
            required
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-2 h-32 rounded border"
            />
          )}
        </div>
      </Form>
    </div>
  );
}
