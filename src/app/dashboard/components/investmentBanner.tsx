"use client";
import { Dot } from "lucide-react";
import { FC, useEffect, useState } from "react";
import moment from "moment";

interface InvestmentProps {
  invoiceNumber: number;
  id: string;
  name: string;
  description: string;
  date: string;
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
}
export const InvestmentBanner: FC<InvestmentProps> = ({
  invoiceNumber,
  id,
  name,
  description,
  price,
  initialDeposit,
  documentationFee,
  date,
  quantity,
  total,
  propertyType,
  propertyData,
  media,
  developerInfo,
  realtorGroupInfo,
  realtorInfo,
}) => {
  console.log(propertyData.media[0]);
  const [image, setImage] = useState("");

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (media?.length > 0) {
      setImage(media[0]);
    }
  }, [media]);
  return (
    <div
      className="w-full h-[333px]"
      style={{
        backgroundImage: `url(${propertyData.media[0]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full bg-[rgba(0,0,0,.5)] flex items-end ">
        <div className=" w-full px-4 lg:px-8 pb-4 flex items-center justify-between">
          <div>
            <h3 className="text-white text-2xl font-semibold">
              {propertyData.name}
            </h3>
            {/* <p className="text-white  font-light ">{address}</p>
            <p className="text-white  font-light">{city}</p> */}
            <div className="flex items-center gap-[4px]">
              <span className="text-white text-xs">
                {propertyData.propertyType}
              </span>
              <Dot className="text-white" />
              <span className="text-white text-xs">
                Quantity {propertyData.quantity}
              </span>
            </div>
            <p className="text-white text-xs mt-1">
              Invioce ID: ${propertyData.invoiceId}
            </p>
          </div>
          <div>
            <p className="text-white  font-light">
              {moment(date).format("YYYY-MM-DD")}
            </p>
            <h3 className="text-white text-2xl font-semibold">
              {propertyData.price ? propertyData.price.toLocaleString() : 0}
            </h3>
            <div className="flex items-center gap-2">
              <span className="bg-white rounded-xl text-darkGray2 px-1 py-[2px] text-xs">
                R of O
              </span>
              <span className="bg-white rounded-xl text-darkGray2 px-1 py-[2px] text-xm">
                C of O
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
