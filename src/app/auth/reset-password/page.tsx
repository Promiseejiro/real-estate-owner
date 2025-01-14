"use client";

import { AppButton } from "@/components";
import AppTextInput from "../../../components/ui/appTextInput";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { sendOtpForgotPassword } from "@/app/apiRequests";
// import { useRouter } from "next/navigation";

const validationSchema = yup.object().shape({
  phoneNumber: yup
    .number()
    .typeError("Phone number must be number")
    .required("Phone number is required")
    .label("Phone number"),
});

function Page() {
  const {
    // handleSubmit,
    formState: { errors },
    register,
  } = useForm({ resolver: yupResolver(validationSchema) });
  // const router = useRouter();

  //   const { data, isLoading, mutate } = useMutation({
  //     mutationFn: (data: any) => sendOtpForgotPassword(data),
  //     onSuccess: (res) => {
  //       const phoneNumber: string = res.to;
  //       const splitNumber = phoneNumber.split("");
  //       splitNumber.shift();
  //       const phoneNumberWithoutPlus = splitNumber.join("");

  //       alert("An OTP will be sent to " + phoneNumber);
  //       router.push(`/auth/verify-otp?phonenumber=${phoneNumberWithoutPlus}`);
  //     },
  //     onError: (err: any) => {
  //       if (err?.response?.data?.message) {
  //         alert(err.response.data.message);
  //       } else {
  //         alert("Something went wrong!");
  //       }
  //     },
  //   });

  //   const onSubmit = async (data: any) => {
  //     const phoneNumber = toPhoneNumberWithCode(data.phoneNumber);
  //     mutate({ phonenumber: phoneNumber });
  //   };

  return (
    <>
      <h2 className="text-center text-2xl text-white font-medium">
        Reset your password
      </h2>
      <p className="text-sm text-white mt-4 text-center">
        Enter your phone number so we can send you a link to reset your password
      </p>

      <form
        // onSubmit={handleSubmit(onSubmit)}
        onSubmit={() => {}}
        className="mt-6 flex flex-col gap-4"
      >
        <AppTextInput
          placeholder="Phone number"
          type="phoneNumber"
          {...register("phoneNumber")}
          error={errors.phoneNumber?.message as string}
        />

        <AppButton
          title="Continue"
          className="text-[1rem] font-medium h-[50px] bg-secondary"
          type="submit"
          //   isLoading={isLoading}
          isLoading={false}
        />

        <Link href="/auth/login" className="self-center text-primary text-sm">
          Back to Log in
        </Link>
      </form>
    </>
  );
}

export default Page;
