import { Search } from "lucide-react"
import { ShoppingCart } from "lucide-react";
import Profile from "./Profile";
import { useSession } from "@/hooks/useSession";
import { Input } from "./ui/input";
import ProfileAside from "./aside";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";
import Cart from '@/components/cart'
import useCartStore from "@/stores/cartStore";

export default function Navbar({className}) {
  const navigate = useNavigate()
  const items = useCartStore(state => state.items);



  function HandleSellClick(){

    navigate('/products/sell')
  }
  const {session} = useSession()
  return (
    <nav className={"w-full  bg-accent text-accent py-3 px-4 " + className}>
      <div className="grid auto-cols-fr  grid-flow-col justify-between w-auto items-center gap-2">
        <div className="bg-[url('zmercado1.png')]  bg-cover bg-center  w-[3rem] min-h-[3rem] "></div>
        <div className="flex items-stretch   gap-2">
          <Input
            type="search"
            name="customSearch"
            id="customSearch"
            placeholder="Search..."
            className="border max-h-[2rem] px-2 py-1 rounded w-full bg-background "
          />
          <button className="p-2 bg-background rounded hover:bg-gray-200 transition-all ease-in  ">
            <Search className="w-4 h-4 " />
          </button>
        </div>
        <Button variant={"outline"} onClick={HandleSellClick} className="w-fit  hover:text-background ml-auto" >Sell Items</Button>      
        <div className="justify-self-end flex gap-2 justify-between items-center">
          <Cart>
              <div className="px-1 py-1 hover:bg-gray-200 relative transition-all ease-in bg-background  rounded">
                <ShoppingCart className="w-1/2 mx-auto" />
                <div className="text-accent absolute bottom-0 right-1 text-[.6rem]">{items.length}</div>

                </div>
          </Cart>
        <ProfileAside user={session?.user} ><Profile  user={session?.user}/></ProfileAside>
        </div>
        
      </div>
    </nav>
  );
}

