import Image from "next/image";
import { FC } from "react";
import { Status } from "./status";

interface InvestmentCardProps {
  invoiceNumber: number;
  id: string;
  name: string;
  description: string;
  price: number;
  initialDeposit: number;
  quantity: number;
  documentationFee: number;
  total: number;
  propertyType: string;
  media: string[];
  developerInfo: {
    name: string;
    address: string;
    phoneNumber: number;
    email: string;
    logo: string;
  };
  realtorGroupInfo: {
    adminName: string;
    name: string;
    address: string;
    phoneNumber: number;
    email: string;
    logo: string;
  };
  realtorInfo: {
    adminName: string;
    name: string;
    address: string;
    phoneNumber: number;
    email: string;
    logo: string;
  };
  propertyData: {
    id: string;
    name: string;
    description: string;
    price: string;
    initialDeposit: string;
    quantity: number;
    documentationFee: string;
    total: string;
    propertyType: string;
    media: string[];
    invoiceId: number;
  };
  onClick: (id: string) => void;
}
export const InvestmentCard: FC<InvestmentCardProps> = ({
  invoiceNumber,
  id,
  name,
  description,
  price,
  initialDeposit,
  documentationFee,
  quantity,
  total,
  propertyType,
  media,
  propertyData,
  developerInfo,
  realtorGroupInfo,
  realtorInfo,
  onClick,
}) => {
  return (
    <div
      className="flex items-start w-full h-[144px] px-4 py-8 border-b-lightGrey border-b  border-solid cursor-pointer"
      onClick={() => {
        onClick(id);
      }}
    >
      <Image
        src={propertyData.media[0]}
        alt="profile picture"
        width={92}
        height={88}
        className="object-cover w-[80px] h-[80px] rounded-md mr-6"
      />
      <div className="flex items-start justify-between w-full h-full">
        <div>
          <h5 className="font-semibold text-lg">{propertyData.name}</h5>
          <p className="text-darkGray text-sm">{propertyData.propertyType}</p>
          {/* <p className="text-darkGray text-sm">{propertyData.email}</p> */}
          {/* <p className="text-darkGray text-sm">{city}</p> */}
        </div>
        <div className="flex flex-col justify-between h-full">
          <p className="text-darkGray text-xs p-2">
            QTY {propertyData.quantity}
          </p>
          {/* <Status {...status} /> */}
        </div>
      </div>
    </div>
  );
};
