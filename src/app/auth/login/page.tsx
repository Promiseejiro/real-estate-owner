"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AppButton } from "@/components";
import AppTextInput from "../../../components/ui/appTextInput";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { signIn } from "next-auth/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import ROUTES from "@/routes";
import showToast from "@/utils/showToast";

const validationSchema = yup.object().shape({
  customer: yup.string().required("Email is required").label("Email"),
  password: yup
    .string()
    .min(6)
    .max(255)
    .required("Password is required")
    .label("Password"),
});

const Login = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({ resolver: yupResolver(validationSchema) });
  const [isLoading, setIsLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onSubmit = async (data: any) => {
    const formData = { ...data };
    setIsLoading(true);
    const res = await signIn("credentials", {
      customer: data.customer,
      password: data.password,
      redirect: false,
    });
    if (res?.ok) {
      router.replace(ROUTES.DASHBOARD);
    } else {
      showToast("Failed to login.", "error");
    }
    setIsLoading(false);
  };
  if (!isClient) {
    return null; // Prevent rendering on the server-side
  }

  return (
    <>
      <h2 className="text-center text-4xl text-darkPlus font-bold">
        Speedly ​
      </h2>
      <p className="text-lg font-semibold text-darkPlus mt-2 text-center">
        Real Estate Owner
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 flex flex-col gap-4"
      >
        <AppTextInput
          placeholder="Email"
          type="tel"
          {...register("customer")}
          error={errors.customer?.message as string}
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
            className="text-[1rem] font-medium h-[50px] bg-primary w-full"
            type="submit"
            isLoading={isLoading}
          />
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="/auth/reset-password"
            className="self-center text-primary text-sm "
          >
            Forgot password?
          </Link>
        </div>
      </form>
    </>
  );
};

export default Login;
