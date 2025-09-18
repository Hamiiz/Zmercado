import Form from "@/components/Form";
import { Separator } from "@/components/ui/separator";
import { useFetcher } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
export default function PaymentChecout() {
  const location = useLocation();
  const checkItems = location.state?.items || [];
  const fetcher = useFetcher()
    if (fetcher.data?.errors) {
      const errorMsg = fetcher.data?.errors?.message;
        if (!toast.isActive(errorMsg)) {
          toast.error(errorMsg, { toastId: errorMsg });
        }
        fetcher.data.errors = null
    }


  return (
    <div className="flex justify-center gap-5  items-center p-5">
      <section className=" shadow-md  dark:bg-neutral-800  w-1/3 min-w-fit  p-10 ">
        <div className="text-left">
          <h1 className="text-2xl">Payment Checout</h1>
          <Separator orientation="horizontal" className="bg-neutral-700 my-5" />
          <div className="">
            <h2 className="text-xl w-fit  mx-auto">Summary</h2>
            {checkItems.map((item) => (
             [ <div className="flex justify-between"   key={item.id}>
                <p>{item.name}</p>
                <p>ETB {item.price}</p>
              </div>,
              <Separator orientation="horizontal" className="bg-neutral-700 my-1" />]
            ))}
            <div className="flex justify-between" >
              <p>total</p>
              <p>
                ETB {checkItems?.reduce((total, item) => total + item.price, 0)}
              </p>
            </div>
          </div>
        </div>
        <Form
          id='paymentform'
          fetcher={fetcher}
          route="paymentcheckout"
          buttonText="Submit"
          className="mt-5 flex flex-col gap-3 " required
        >
          <h2>Payer Info</h2>
          <Input type="text" name="name" placeholder="Full Name" required/>
          <Input type="email" name="email" placeholder="Email" required />
          <div className="flex gap-2">
            <select
              className="w-fit border-1 border-accent rounded-md "
              name="countryCode" required
            >
              <option value="+251" defaultValue>
                +251
              </option>
            </select>
            <input
              type="tel"
              className="w-full p-2"
              name="phone"
              maxLength={9}
              placeholder="Phone Number" required
            />
          </div>
          <h2>Address Info</h2>
          <Input type="text" name="address" placeholder="Address" />
          <Input type="text" name="city" placeholder="City"  required/>
          <Input type="text" name="zip" placeholder="Zip Code"  required/>
          <Input type='hidden' name='amount' value={checkItems?.reduce((total, item) => total + item.price, 0)} />
          <Input type='hidden' name='productIds' value={checkItems?.map((item) => item.id)} />

        </Form>
      </section>
      <section className="shadow-md  dark:bg-neutral-800  self-start  w-1/3 p-10   ">
        <h2>Payment Method</h2>
        <div className="text-left">
          <div className="flex items-center gap-2" >
            <Input
              form="paymentform"
              type="radio"
              className="w-[1rem] "
              name="paymentmethod"
              value="telebirr"
              defaultChecked

            />
            <span> Telebirr</span>
          </div>
          <div  className="flex items-center gap-2" >
            <Input
              form="paymentform"
              type="radio"
              className="w-[1rem] "
              name="paymentmethod"
              value="chapa"
              
            />{" "}
            <span>Chapa</span>
          </div>
        </div>
      </section>
    </div>
  );
}
