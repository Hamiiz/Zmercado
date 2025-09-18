import { useNavigate, useFetcher } from "react-router-dom";

import Form from "@/components/Form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { OtpInput } from "@/components/otp";

export default function VerificationPage() {
  const navigate = useNavigate();
  let fetcher = useFetcher();
  const error = fetcher.data?.error;


  useEffect(() => {
    if (error) {
      const errorMsg = error;
      if (!toast.isActive(errorMsg)) {
        toast.error(errorMsg, { toastId: errorMsg });
      }
    }
  }, [error]);

  if (fetcher?.data?.success) {
    navigate("/products");
  }

  return (
    <div className="h-screen place-content-center">
      <div className="bg-card w-1/2 mx-auto px-15 py-17 rounded-xl shadow-2xl ">
        <h1 className="font-bold text-center text-lg my-3 md:text-2xl">
          Verify your Email
        </h1>
        <p className="text-sm m-1 text-center">
          {" "}
          we have sent a one-time code to your email (If it is a Valid Email).
        </p>

        <div className="w-1/2 my-5 mx-auto flex justify-center">
          <OtpInput fetcher={fetcher} status={fetcher.data} />
        </div>
      </div>
    </div>
  );
}
