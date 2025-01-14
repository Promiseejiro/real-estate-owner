"use client";
import Link from "next/link";
import { AppButton } from "@/components";
import AppTextInput from "../../../components/ui/appTextInput";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
// import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const validationSchema = yup.object().shape({
  phoneNumber: yup
    .number()
    .typeError("Must be number")
    .required("Phone number is required")
    .label("Phone number"),
  password: yup
    .string()
    .min(6)
    .max(255)
    .required("Password is required")
    .label("Password"),
});

function Page() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({ resolver: yupResolver(validationSchema) });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async () => {
    // const formData = { ...data };

    // Change phone number to +234 format

    setIsLoading(true);
    // const res = await signIn("credentials", {
    //   ...formData,
    //   redirect: false,
    // });
    // if (res?.ok) {
    //   router.replace("/dashboard");
    // } else {
    //   alert("Failed to login. An error occured.");
    // }
    router.replace("/dashboard");
    setIsLoading(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 flex flex-col gap-4"
      >
        <AppTextInput
          placeholder="Phone number"
          type="tel"
          {...register("phoneNumber")}
          error={errors.phoneNumber?.message as string}
          autoFocus
        />
        <AppTextInput
          placeholder="Password"
          type="password"
          {...register("password")}
          error={errors.password?.message as string}
        />

        <div className="flex justify-between items-center gap-6">
          <AppButton
            title="Login"
            className="text-[1rem] font-medium h-[50px] bg-secondary w-full"
            type="submit"
            isLoading={isLoading}
          />
          <Link
            href="/auth/reset-password"
            className="self-center text-white text-sm w-full"
          >
            Forgot password?
          </Link>
        </div>
      </form>
    </>
  );
}

export default Page;
