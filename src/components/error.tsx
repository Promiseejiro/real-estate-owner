"use client";

import React from "react";
import { AppButton } from "@/components";
import { IoIosWarning } from "react-icons/io";

interface IProps {
  onRetry: () => void;
  error?: string;
  moveTop?: boolean;
}

const Error: React.FC<IProps> = ({ onRetry, error, moveTop = true }) => {
  return (
    <div
      className={`${
        moveTop ? "-top-[50px]" : ""
      } relative max-w-[600px] mx-auto flex flex-col items-center justify-center flex-1 h-full`}
    >
      {/* <Image
				src={errorAnimation}
				priority
				alt="error"
				width={300}
				height={300}
			/> */}
      <IoIosWarning size={150} className="text-lightGrey" />
      <h2 className="mb-4 text-xl font-medium">
        {error || "Something went wrong!"}
      </h2>
      <AppButton
        title="Try again"
        handleClick={onRetry}
        className="max-w-[150px] mx-auto"
      />
    </div>
  );
};

export default Error;
