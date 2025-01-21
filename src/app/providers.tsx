"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { AppProvider } from "./contexts";
import React from "react";

const queryClient = new QueryClient();

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <AppProvider>{children}</AppProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
}

export default Providers;
