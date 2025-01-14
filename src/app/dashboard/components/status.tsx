import { FC } from "react";

interface StatusProps {
  active: boolean;
  text: string;
  action?: () => void;
}
export const Status: FC<StatusProps> = ({ active, text, action }) => {
  return (
    <span
      onClick={action}
      className={`text-sm font-normal px-3 py-1 rounded-md cursor-pointer ${
        active ? "bg-primary text-white" : "bg-[#F0F0F0] text-[#404040]"
      }`}
    >
      {text}
    </span>
  );
};
