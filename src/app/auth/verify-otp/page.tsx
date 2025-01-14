"use client";

import React, { FormEvent, useState } from "react";
import { AppButton } from "@/components";
import OtpInput from "@/components/otpInput";
import { useRouter } from "next/navigation";
// import { useQuery } from "@tanstack/react-query";
// import { forgotPasswordValidateOtp } from "@/app/apiRequests"

/* eslint-disable  @typescript-eslint/no-explicit-any */
const Page = ({ searchParams }: { searchParams: any }) => {
  const router = useRouter();
  const [otp, setOtp] = useState("");

  const phoneNumber = searchParams["phonenumber".toLowerCase()];
  if (!phoneNumber) router.back();

  // const { refetch, isInitialLoading, isFetching } = useQuery({
  // queryKey: ["forgotPasswordValidateOtp"],
  // queryFn: () =>
  // 	forgotPasswordValidateOtp({ data: { otp, phoneNumber } }),
  // enabled: false,
  // onSuccess: (res: any) => {
  // 	alert("Verification successful! 😄")
  // 	router.push(`/auth/new-password?userId=${res.userId}`)
  // },
  // onError: (err: any) => {
  // 	if (err?.response?.data?.message) {
  // 		alert(err.response.data.message)
  // 	} else {
  // 		alert("Something went wrong!")
  // 	}
  // },
  // })
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // refetch()
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{ height: "calc(100vh - 100px)" }}
      className="flex flex-col justify-center relative"
    >
      <h2 className="text-center text-2xl text-darkPlus font-medium">
        Verify OTP
      </h2>
      <p className="text-sm text-darkGrey mt-2 text-center">
        Please enter the OTP sent to your phone
      </p>

      <div className="mt-6">
        <OtpInput {...{ value: otp, setValue: setOtp, numberOfInputs: 6 }} />
      </div>

      <p className="text-grey mt-4 text-center mb-6">Resend OTP in 29</p>

      <AppButton
        title="Continue"
        className="text-base font-medium h-[50px] w-full"
        type="submit"
        // isLoading={isFetching}
      />
    </form>
  );
};

export default Page;
