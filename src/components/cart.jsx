import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import useCartStore from "@/stores/cartStore";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { useState } from "react";
export default function Cart({ children }) {
  const { items, removeItem ,clearCart} = useCartStore();
  const [selectedIds, setSelectedIds] = useState([]);
//eslint-disable-next-line
  const [itemAmount, setItemAmount] = useState(1);
  const navigate = useNavigate();

  const toggledCB = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
  
  );
  };
  const HandleRemoveItem = ()=>{
        if (selectedIds.length === 0) return;
        else if (selectedIds.length === items.length){
             clearCart();
        }else{

            const filteredItems = items.filter(item => selectedIds.includes(item.id));
            filteredItems.forEach(item => removeItem(item));
        }
        setSelectedIds([]);
    
  }
  function navigatToCheckout(){
    const selectedItems = items.filter((item) => selectedIds.includes(item.id));
    navigate('/paymentCheckout',{state:{items:selectedItems}})
    
    }
  return (
    <Drawer className="">
      <DrawerTrigger className="relative">{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-3xl font-bold ">Cart</DrawerTitle>
          <DrawerDescription>here is your saved items.</DrawerDescription>
        </DrawerHeader>
        <div className=" ">
          <ul className="overflow-y-scroll w-[95%] mx-auto h-[10rem] p-12 items-center border-none ">
            {items.map((item) => [
              <li
                className="grid dark:text-neutral-200 dark:bg-neutral-800 grid-rows-1 grid-cols-5 p-2 gap-4 min-h-fit items-center"
                key={crypto.randomUUID()}
              >
                <img
                  className="w-20 rounded-md"
                  src={item.image ? new URL(item.image) : null}
                  alt="image"
                />
                <Link className="min-w-fit mx-2" to={`/products/${item.id}`}>
                  {item.name}
                </Link>
                <p>ETB{item.price}</p>
                <Input
                  className="w-fit"
                  type="number"
                  max={item.stock}
                  min={1}
                  defaultValue={itemAmount}
                />
                <Input
                  className="w-fit mx-2 justify-self-end"
                  type="checkbox"
                  checked={Boolean(selectedIds.includes(item.id))}
                  onChange={() => toggledCB(item.id)}
                />
              </li>,
              <Separator className="my-2 bg-gray-400 " />,
            ])}
          </ul>
        </div>
        <DrawerFooter>
          <Button
            className="w-11/12 mx-auto bg-accent text-background hover:bg-accent/90"
            variant={"default"}
            onClick={navigatToCheckout}
            disabled={selectedIds.length === 0}
          >
            Checkout{" "}
            {  selectedIds.length === 0 ? null : `(${selectedIds.length})`}{" "}
          </Button>
          <Button
            onClick={HandleRemoveItem}
            className="w-11/12 mx-auto bg-red-900 text-background hover:bg-red-950"
            variant={"destructive"}
          >
            remove {selectedIds.length === 0 ? null : `(${selectedIds.length})`}
          </Button>

          <DrawerClose className="w-11/12 transition-all ease-in  mx-auto border-1 border-accent text-accent hover:bg-accent hover:text-background rounded-md p-1">
            Cancel
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
