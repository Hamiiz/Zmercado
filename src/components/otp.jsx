import { useEffect, useState, useRef, useCallback } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
export function OtpInput({ fetcher,status }) {
  const [value, setValue] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false); // Track if the form has been submitted
  const form = useRef(null);

  const submitForm = useCallback(() => {
    fetcher.submit(form.current);
  }, [fetcher]);

  useEffect(() => {
    if (value.length === 6 && !hasSubmitted) {
      setHasSubmitted(true); // Prevent further submissions
      submitForm();
    }
  }, [value, hasSubmitted, submitForm]);


  return (
    <fetcher.Form
      method="post"
      ref={form}
      className="otpForm"
      action="/verify_email"
    >
      <div className="space-y-2">
        <InputOTP
          maxLength={6}
          value={value}
          onChange={(value) => {
          setValue(value);
          setHasSubmitted(false); // Reset submission state on input change
          
          }}
          name="otp"
        >
          <InputOTPGroup>
            <InputOTPSlot className={status?.error?'border-red-700':status?.success?'border-emerald-600':''} index={0} />
            <InputOTPSlot className={status?.error?'border-red-700':status?.success?'border-emerald-600':''} index={1} />
            <InputOTPSlot className={status?.error?'border-red-700':status?.success?'border-emerald-600':''} index={2} />
            <InputOTPSlot className={status?.error?'border-red-700':status?.success?'border-emerald-600':''} index={3} />
            <InputOTPSlot className={status?.error?'border-red-700':status?.success?'border-emerald-600':''} index={4} />
            <InputOTPSlot className={status?.error?'border-red-700':status?.success?'border-emerald-600':''} index={5} />
          </InputOTPGroup>
        </InputOTP>
        <div className="text-center text-sm">
          { status?.error? (
            <p className="text-red-700">{status.error}</p>
          ):status?.success? (
            <p className="text-emerald-500">OTP Correct!!</p>
          ): (
            <>Enter your one-time password.</>
          ) }
        </div>
      </div>
    </fetcher.Form>
  );
}