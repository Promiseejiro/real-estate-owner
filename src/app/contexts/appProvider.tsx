"use client";

import React, { createContext, useContext } from "react";

const AppContext = createContext(
  {} as {
    user: string;
  }
);

function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <AppContext.Provider value={{ user: "" }}>{children}</AppContext.Provider>
  );
}

export default AppProvider;

export const useAppContext = () => {
  return useContext(AppContext);
};
