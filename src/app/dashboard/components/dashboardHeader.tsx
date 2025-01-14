import { AppButton } from "@/components";
import { BsArrowRight } from "react-icons/bs";
import { ProfileDropdown } from "./profileDropdown";

export const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between py-4 px-6">
      <ProfileDropdown />
      <AppButton
        iconLeft={<BsArrowRight className="text-white h-4 w-4" />}
        title="View Real Estate"
        className="transparent text-dark"
      ></AppButton>
    </div>
  );
};
