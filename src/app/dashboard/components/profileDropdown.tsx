import Image from "next/image";
import { FC } from "react";

interface ProfileDropdownProps {
  imageUrl?: string;
  name?: string;
  city?: string;
}
export const ProfileDropdown: FC<ProfileDropdownProps> = ({
  imageUrl,
  name,
  city,
}) => {
  return (
    <div className="flex gap-6 items-start">
      <Image
        src={
          imageUrl
            ? imageUrl
            : "https://img.freepik.com/premium-photo/beach-is-one-most-beautiful-beaches-world_951133-28204.jpg"
        }
        alt="profile picture"
        width={40}
        height={40}
        className="object-cover w-[60px] h-[60px] rounded-full"
      />
      <div>
        <h4 className="text-lg font-semibold truncate capitalize">{name}</h4>
        <p className="text-xs font-normal truncate capitalize">
          Real Estate Owner
        </p>

        <button className="text-primary border-b-[2px] border-solid border-primary bg-transparent outline-none text-xs">
          View Profile
        </button>
      </div>
    </div>
  );
};
