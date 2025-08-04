import Navbar from "@/components/Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Outlet, useLoaderData } from "react-router-dom";
import ProductBox from "@/components/product";
import { NavigationOff } from "lucide-react";
export default function ProductPage() {
    const products = useLoaderData()
  
    // let isLoading = true

  return (
    <>
      <div className="p-10" >
        <ScrollArea>
        <ul className=" w-full grid grid-cols-[repeat(auto-fill,_minmax(250px,1fr))]">
       {/* eslint-disable-next-line */}
       { products.map((product, i) =>
            <li className='m-2' key={product.id} >
                <ProductBox 
                className={'w-full  dark:bg-neutral-800 '}
                product={product} />
            </li> )

            }
          </ul>
        </ScrollArea>
      </div>
    </>
  );
}
