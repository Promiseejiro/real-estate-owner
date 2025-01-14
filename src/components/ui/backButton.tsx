"use client";

import { useRouter } from "next/navigation";
import { BsArrowLeftShort } from "react-icons/bs";

const BackButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <button
      onClick={handleClick}
      className="grid place-items-center bg-lightGreyPlus rounded-full cursor-pointer hover:bg-lightGrey"
    >
      <span className="p-[10px]">
        <BsArrowLeftShort size={24} color="text-black" />
      </span>
    </button>
  );
};

export default BackButton;
