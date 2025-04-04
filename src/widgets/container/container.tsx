import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen pt-17 bg-gray-100 overflow-scroll">
      {children}
    </main>
  );
};
