
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useLoaderData, useNavigate } from "react-router-dom"
import ProductPage from "./ProductPage";
import { useEffect,  useState} from "react";
import ProductBox from "@/components/product";
import api from "@/api/axiosInstance";
import useCartStore from "@/stores/cartStore";

export default function ItemPage() {
    const data  = useLoaderData();

    const navigate = useNavigate()

  const { addItem, items } = useCartStore();
    let [products, setProducts] = useState([]);
      useEffect(() => {
        const isInCart = items.some(item => item.id === data.id);
        setIsCarted(isInCart);
      }, [items, data.id]);
    async function getProductss(){
        try{

            const {data} = await api.get('/getProducts?lim=8')
            setProducts(e=>[...e,...data])
            
            return data
        }catch(e){
            return e
        }
    }
    const [isCarted, setIsCarted] = useState(false);
    const HandleAddCart = () => {
      addItem(data);
      setIsCarted(true);
    };
    function navigatToCheckout(){
        navigate('/paymentCheckout',{state:{items:[data]}})
    }

    return (
        <>
        <div>
            <div className="flex m-2 rounded-xl py-10 px-5 justify-around shadow-md shadow-neutral-400     " >
                <div className="w-1/4 mx-auto" ><img className="rounded-2xl" src={data?.image||null} alt="product" /></div>
                <Separator className="bg-accent text-accent min-h-[10rem] "  orientation="vertical" />
                <div className=" text-left w-fit mx-auto" >
                    <h1 className="text-2xl">{data?.name||null}</h1>
                    <p className="text-md">{data?.description||null}</p>
                    <p className="text-md inline mr-4 ">Price: ETB {data?.price||null}</p>
                    <p className="text-md inline text-neutral-600 ">stock: {data?.stock||null}</p>
                    <div>
                        <Button 
                        onClick={navigatToCheckout}
                        className="mt-4 bg-accent text-background hover:bg-accent/50 " >Buy Now</Button>
                        <Button
                                  onClick={HandleAddCart}
                                  disabled={isCarted}
                                  className="mt-4 ml-4  bg-neutral-700 text-background hover:bg-neutral-600/50"
                                  variant={"default"}
                                >
                                  {isCarted
                                    ? [ " Added"]
                                    : [
                                       
                                        " Add To Cart",
                                      ]}
                                </Button>
                    
                    </div>
                
                </div>
            </div>
            <div>
                <h1 className="text-2xl m-4" >Similar Products</h1>
                { products.length ==0&& <Button className="mt-4 bg-accent text-background hover:bg-accent/50 " 
                onClick={getProductss}
                >View Similar items.</Button>}
                <div className="grid w-5/6 mx-auto grid-cols-3 gap-4 m-4" >
                    {products.length>0&&products.map((product) => (
                        <ProductBox key={product.id} product={product} />
                    ))}
                </div>
                

            </div>
        </div>

        </>
    )
}