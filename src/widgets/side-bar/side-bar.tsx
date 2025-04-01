"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { SideBarItem } from "./type";

export const SideBar = () => {
  const sideBarItems: SideBarItem[] = [
    {
      title: "스케줄 등록",
      url: "/schedule",
    },
    {
      title: "스케줄 관리",
      url: "#",
    },
  ];
  return (
    <SidebarProvider>
      <Sidebar className="z-1 pt-20">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {sideBarItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <span className="text-sm font-bold">{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};
