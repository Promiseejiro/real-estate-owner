import Image from "next/image";
import { FC } from "react";
// import { Status } from "./status";

interface DealerCardProps {
  name: string;
  imageUrl: string;
  address: string;
  city: string;
  investmentType: string;
}
export const DealerCard: FC<DealerCardProps> = ({
  name,
  imageUrl,
  address,
  city,
  investmentType,
}) => {
  return (
    <div className=" w-full px-4 py-5 bg-[#D2EEDF] rounded-lg">
      <div>
        <p className="text-[#5F5F5F] font-semibold">Developer</p>
      </div>
      <div className="flex items-start w-full h-full gap-6 mt-6">
        <Image
          src={imageUrl}
          alt="profile picture"
          width={70}
          height={70}
          className="object-cover w-[80px] h-[80px] rounded-full mr-4"
        />
        <div>
          <h5 className="font-semibold text-lg">{name}</h5>
          <p className="text-darkGray text-sm">{investmentType}</p>
          <p className="text-darkGray text-sm">{address}</p>
          <p className="text-darkGray text-sm">{city}</p>
        </div>
      </div>
    </div>
  );
};
