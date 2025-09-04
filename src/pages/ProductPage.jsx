import Navbar from "@/components/Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Outlet, useNavigate,useLoaderData } from "react-router-dom";
import ProductBox from "@/components/product";
import { NavigationOff } from "lucide-react";

export default function ProductPage() {
    const products = useLoaderData()
    const navigate = useNavigate()
    // let isLoading = true
    function HandleNavigate(id){
        return navigate(`/products/item?id=${id}`)

    }

  return (
    <>
      <div className="p-10" >
        <ScrollArea>
        <ul className=" w-full grid grid-cols-[repeat(auto-fill,_minmax(250px,1fr))]">
       {/* eslint-disable-next-line */}
       { products.map((product, i) =>
            <li
            onClick={() => HandleNavigate(product.id)} 
             className='m-2' key={product.id} >
                <ProductBox 
                className={'w-full  dark:bg-neutral-800 '}
                product={product}  />
            </li> )

            }
          </ul>
        </ScrollArea>
      </div>
    </>
  );
}
