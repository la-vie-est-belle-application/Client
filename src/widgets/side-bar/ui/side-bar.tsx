"use client";

import { FaCalendarAlt, FaList, FaPlus } from "react-icons/fa";
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
import Link from "next/link";
import { SideBarItem } from "../type";
import { SchedulePanel } from "./schedule-panel";

export const SideBar = () => {
  const sideBarItems: SideBarItem[] = [
    {
      icon: <FaPlus />,
      title: "스케줄 등록",
      url: "/schedule",
    },
    {
      icon: <FaCalendarAlt />,
      title: "스케줄 관리",
      url: "/schedule",
    },
    {
      icon: <FaList />,
      title: "리스트로 보기",
      url: "/schedule",
    },
  ];
  return (
    <SidebarProvider>
      <Sidebar className="z-1 pt-20">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="pr-1 pl-1">
              <SidebarMenu>
                {sideBarItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url} className="flex items-center gap-2">
                        {item.icon}
                        <span className="text-sm font-bold">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
              <SchedulePanel />
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};
