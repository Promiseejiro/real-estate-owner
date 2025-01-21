"use client";
import logo from "@/assets/logo.svg";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="py-6 px-4 h-screen flex flex-col items-center ">
      <Image
        src={logo}
        width={30}
        height={45}
        alt="speedly-logo"
        className="object-contain"
      />

      <main className="w-full max-w-sm pt-4 h-fit my-auto">{children}</main>
    </div>
  );
}
