"use client";

// import { axiosInstance } from "./libs";
// import { useSession } from "next-auth/react";
import React from "react";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  //   const { data: session, status } = useSession();

  //   useEffect(() => {
  //     if (status === "authenticated") {
  //       axiosInstance.defaults.headers.common["Authorization"] =
  //         "Bearer " + session?.user.token;
  //     }
  //   }, [status, session]);

  return <>{children}</>;
};

export default LayoutWrapper;
