"use client";
import Image from "next/image";
import { FC } from "react";
// import { Status } from "./status";

interface DealerCardProps {
  name: string;
  address: string;
  phoneNumber: number;
  email: string;
  logo: string;
}
export const DealerCard: FC<DealerCardProps> = ({
  name,
  address,
  phoneNumber,
  email,
  logo,
}) => {
  return (
    <div className=" w-full px-4 py-5 bg-[#D2EEDF] rounded-lg">
      <div>
        <p className="text-[#5F5F5F] font-semibold">Developer</p>
      </div>
      <div className="flex items-start w-full h-full gap-6 mt-6">
        <Image
          src={logo}
          alt="profile picture"
          width={70}
          height={70}
          className="object-cover w-[80px] h-[80px] rounded-full mr-4"
        />
        <div>
          <h5 className="font-semibold text-lg">{name}</h5>
          <p className="text-darkGray text-sm">{email}</p>
          <p className="text-darkGray text-sm">{address}</p>
        </div>
      </div>
    </div>
  );
};
