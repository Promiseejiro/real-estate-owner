"use client";

import { AppButton } from "@/components";
import AppTextInput from "../../../components/ui/appTextInput";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import { useRouter } from "next/navigation";
// import { useMutation } from "@tanstack/react-query";
// import { resetPassword } from "@/app/apiRequests"
// import LoaderView from "@/components/loaderView";

// const validationSchema = yup.object().shape({
//   newPassword: yup
//     .string()
//     .min(6)
//     .max(255)
//     .required("Password is required")
//     .label("Password"),
//   confirmNewPassword: yup
//     .string()
//     .min(6)
//     .max(255)
//     .required("Confirm password is required")
//     .label("Confirm Password")
//     .oneOf([yup.ref("newPassword")], "Passwords do not match"),
// });

/* eslint-disable  @typescript-eslint/no-explicit-any */
function Page({ searchParams }: { searchParams: any }) {
  const router = useRouter();

  if (!searchParams.userId) router.back();

  // const {
  //   handleSubmit,w
  //   formState: { errors },
  //   register,
  // } = useForm({ resolver: yupResolver(validationSchema) });

  // const { data, isLoading, mutate } = useMutation({
  // 	mutationFn: (data: any) => resetPassword(data),
  // 	onSuccess: () => {
  // 		alert("Password has been reset successfully! 😄")
  // 		router.replace("/auth/login")
  // 	},
  // 	onError: (err: any) => {
  // 		if (err?.response?.data?.message) {
  // 			alert(err.response.data.message)
  // 		} else {
  // 			alert("Something went wrong!")
  // 		}
  // 	},
  // })

  //   const onSubmit = (data: any) => {
  //     mutate({ ...data, userId: searchParams.userId });
  //   };

  return (
    <>
      {/* {isLoading && <LoaderView />} */}

      <h2 className="text-left text-xl text-white font-bold">
        Welcome Mr Noso Godfry ​
      </h2>
      <p className="text-sm font-normal text-white mt-1 text-left">
        Please, enter and confirm your new password
      </p>

      <form className="mt-6 flex flex-col gap-4">
        <AppTextInput
          placeholder="New password"
          type="password"
          // {...register("newPassword")}
          // error={errors.newPassword?.message as string}
        />
        <AppTextInput
          placeholder="Confirm password"
          type="password"
          // {...register("confirmNewPassword")}
          // error={errors.confirmNewPassword?.message as string}
        />

        <AppButton
          title="Confirm"
          className="text-[1rem] font-medium h-[50px] bg-secondary"
          //   handleClick={handleSubmit(onSubmit)}
          handleClick={() => {}}
        />
      </form>
    </>
  );
}

export default Page;
