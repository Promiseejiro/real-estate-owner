"use client";
import logo from "@/assets/logo.svg";
import Image from "next/image";
// import { useAppContext } from "@/contexts"
import Link from "next/link";
import AppButton from "./ui/appButton";
import { BiLogOut } from "react-icons/bi";

export default function Navbar() {
  //   const { user } = useAppContext();

  return (
    <div className="h-navbar flex items-center px-6 py-4 border-b">
      <Link href="/dashboard" className="flex gap-4 items-center">
        <Image
          src={logo}
          width={25}
          height={40}
          alt="speedly-logo"
          className="object-contain"
        />

        <h2 className="hidden sm:block text-xl font-medium">Speedly Web</h2>
      </Link>

      <div className="ml-auto flex gap-4 md:gap-6 items-center">
        <AppButton
          variant={"secondary"}
          iconRight={<BiLogOut className="text-darkPlus h-4 w-4" />}
          title="Logout"
          className="transparent text-dark"
        ></AppButton>
      </div>
    </div>
  );
}
