import Image from "next/image";
import { FC } from "react";
import { Status } from "./status";

interface InvestmentCardProps {
  name: string;
  imageUrl: string;
  address: string;
  city: string;
  investmentType: string;
  quantity: number;
  status: {
    text: string;
    active: boolean;
  };
}
export const InvestmentCard: FC<InvestmentCardProps> = ({
  name,
  imageUrl,
  address,
  city,
  investmentType,
  quantity,
  status,
}) => {
  return (
    <div className="flex items-start w-full h-[144px] p-8 border-b-lightGrey border-b  border-solid">
      <Image
        src={imageUrl}
        alt="profile picture"
        width={92}
        height={88}
        className="object-cover w-[80px] h-[80px] rounded-md mr-6"
      />
      <div className="flex items-start justify-between w-full h-full">
        <div>
          <h5 className="font-semibold text-lg">{name}</h5>
          <p className="text-darkGray text-sm">{investmentType}</p>
          <p className="text-darkGray text-sm">{address}</p>
          <p className="text-darkGray text-sm">{city}</p>
        </div>
        <div className="flex flex-col justify-between h-full">
          <p>QTY {quantity}</p> <Status {...status} />
        </div>
      </div>
    </div>
  );
};
