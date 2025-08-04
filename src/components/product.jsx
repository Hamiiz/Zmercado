import { GiConsoleController } from "react-icons/gi";
import { StarIcon, StarOffIcon, StarHalfIcon } from "lucide-react";
import { Button } from "./ui/button";
import { MdAddShoppingCart } from "react-icons/md";
import { MdBookmarkAdded } from "react-icons/md";
import { useEffect, useState } from "react";
import useCartStore from "@/stores/cartStore";
export default function ProductBox({ product, className }) {
  let { name, price, image, stock, rating } = product;
  const { addItem, items } = useCartStore();
  useEffect(() => {
    const isInCart = items.some(item => item.id === product.id);
    setIsCarted(isInCart);
  }, [items, product.id]);

  rating ? "" : (rating = 0);
  const [isCarted, setIsCarted] = useState(false);
  const HandleAddCart = () => {
    addItem(product);
    setIsCarted(true);
  };

  return (
    <div
      className={`p-3 rounded-2xl hover:scale-102 hover:shadow-md transition-all ease-in-out 0.3s  bg-gray-100 ${className}`}
    >
      <img
        src={image ? new URL(image) : null}
        alt="card"
        className="w-full h-auto max-h-[10rem] rounded-xl "
      />

      <div className="bodys text-left  p-3">
        <p className="text-2xl">
          <b>ETB{price}</b>
        </p>
        <h1 className="text-md">{name}</h1>
        <div className="rating flex text-gray-500 ">
          {rating == 0
            ? ""
            : [...Array(rating)].map((_, i) => (
                <div key={i}>
                  <StarIcon className="fill-amber-400 w-[1rem] text-transparent" />
                </div>
              ))}
          {[...Array(5 - rating)].map((_, i) => (
            <div key={i}>
              <StarIcon className="w-[1rem]" />
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-[.8rem]">{stock} items in stock</p>
        <Button
          onClick={HandleAddCart}
          disabled={isCarted}
          className="bg-emerald-600 my-2 text-white w-full rounded-3xl hover:bg-background hover:text-accent hover:border-1 hover:scale-105 hover:border-accent"
          variant={"default"}
        >
          {isCarted
            ? [<MdBookmarkAdded key={product.id} />, " Added"]
            : [
                <MdAddShoppingCart key={product.id} className="" />,
                " Add To Cart",
              ]}
        </Button>
      </div>
    </div>
  );
}
