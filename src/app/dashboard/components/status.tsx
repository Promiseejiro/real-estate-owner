import { FC } from "react";

interface StatusProps {
  active: boolean;
  text: string;
  action?: () => void;
  isNav?: boolean | undefined;
}
export const Status: FC<StatusProps> = ({ active, text, action, isNav }) => {
  return (
    <span
      onClick={action}
      className={`text-sm font-normal px-3 py-1 rounded-md cursor-pointer ${
        isNav && active
          ? "bg-primary text-white"
          : isNav && !active
          ? "bg-[#F0F0F0] text-[#404040]"
          : !isNav && text.includes("Pending")
          ? "bg-errorBg text-errorText"
          : !isNav && text.includes("Allocated")
          ? "bg-primary/15 text-primary"
          : !isNav && text.includes("Progress")
          ? "bg-notifyText/20 text-notifyText"
          : ""
      }`}
    >
      {text}
    </span>
  );
};
