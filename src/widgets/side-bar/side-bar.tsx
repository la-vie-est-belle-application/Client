"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
} from "@/components/ui/sidebar";

export const SideBar = () => {
  return (
    <SidebarProvider>
      <Sidebar className="z-1">
        <SidebarContent>SideBar</SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};
