"use client";

import { forwardRef } from "react";
import Spinner from "../spinner";

interface IAppButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  handleClick?: () => void;
  className?: string;
  variant?: "default" | "secondary";
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  isLoading?: boolean;
  loaderSize?: number;
  disabled?: boolean;
}

const AppButton = (
  {
    title,
    handleClick = () => {},
    variant = "default",
    className = "",
    type = "button",
    iconRight = null,
    iconLeft = null,
    isLoading = false,
    loaderSize,
    disabled,
  }: IAppButton,
  ref: any
) => {
  return (
    <button
      disabled={isLoading || disabled}
      onClick={handleClick}
      type={type}
      className={`font-medium text-sm px-5 py-2 rounded-lg transition-colors flex items-center gap-2 flex-nowrap justify-center disabled:opacity-60 disabled:pointer-events-none ${
        variant === "default"
          ? "bg-primary text-white hover:opacity-80"
          : "text-dark outline-lightGrey outline-[1.5px] outline hover:bg-gray-50"
      } ${className}`}
    >
      {isLoading ? (
        <Spinner size={loaderSize || 40} color="white" />
      ) : (
        <>
          {iconLeft}
          {title}
          {iconRight}
        </>
      )}
    </button>
  );
};

export default forwardRef(AppButton);
