"use client";
import { FC, useState } from "react";
import { BiSolidMapPin } from "react-icons/bi";
import { Status } from "./status";

import Image from "next/image";
import { MapPin } from "lucide-react";
import Map from "./map";
import { InvestmentProps } from "@/types";

const InvestmentPreview: FC<InvestmentProps> = ({
  id,
  imageUrl,
  name,
  date,
  address,
  amount,
  invioceId,
  quantity,
  city,
  investmentType,
}) => {
  const [currentNav, setCurrentNav] = useState<string>("Map");
  const navs = ["Map", "Picture", "Video", "Document"];
  return (
    <div>
      <div className="lg:flex justify-between items-center p-6">
        <div className="flex gap-4 items-center">
          {navs.map((nav) => (
            <Status
              isNav={true}
              active={currentNav === nav ? true : false}
              text={nav}
              key={nav}
              action={() => {
                setCurrentNav(nav);
              }}
            />
          ))}
        </div>
        <div className="flex items-center gap-1 mt-4 lg:mt-0">
          <MapPin className="text-primary h-[18px] w-[18px]" />
          <p className="text-lg font-semibold lg:text-base">
            Coral City Estate, Lekki, Lagos
          </p>
        </div>
      </div>

      {currentNav === "Map" ? (
        <Map />
      ) : currentNav === "Picture" ? (
        <div className="mx-6 mb-6 flex items-center">
          {imageUrl.map((url, index: number) => (
            <Image
              key={index}
              src={url}
              alt="profile picture"
              width={92}
              height={88}
              className="object-cover w-[80px] h-[80px] rounded-md mr-6"
            />
          ))}
        </div>
      ) : currentNav === "Document" ? (
        <div className="m-6">Document</div>
      ) : (
        <div className="m-6">Video</div>
      )}
    </div>
  );
};

export default InvestmentPreview;
