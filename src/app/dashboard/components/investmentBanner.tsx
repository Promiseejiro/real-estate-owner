import { FC } from "react";

interface InvestmentBannerProps {
  id: string;
  imageUrl: string;
  name: string;
  date: string;
  amount: number;
  city: string;
  quantity: number;
  address: string;
  invioceId: string;
}
export const InvestmentBanner: FC<InvestmentBannerProps> = ({
  id,
  imageUrl,
  name,
  date,
  address,
  amount,
  invioceId,
  quantity,
  city,
}) => {
  console.log(
    id,
    imageUrl,
    name,
    date,
    address,
    amount,
    invioceId,
    quantity,
    city
  );
  return (
    <div
      className="w-full h-[333px]"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full bg-[rgba(0,0,0,.5)]"></div>
    </div>
  );
};
