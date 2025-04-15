"use client";

import { FaCalendarAlt, FaList, FaPlus } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/index";
import { SideBarItem } from "@/src/widgets/side-bar/type";
import { SchedulePanel } from "@/src/widgets/side-bar/ui/schedule-panel";

export const SideBar = () => {
  const pathname = usePathname();
  const sideBarItems: SideBarItem[] = [
    {
      icon: <FaPlus />,
      title: "스케줄 등록",
      url: "/schedule-dashboard/register",
    },
    {
      icon: <FaCalendarAlt />,
      title: "스케줄 관리",
      url: "/schedule-dashboard/manage",
    },
    {
      icon: <FaList />,
      title: "리스트로 보기",
      url: "/schedule",
    },
  ];
  return (
    <SidebarProvider className="w-65">
      <Sidebar className="pt-17">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="pr-1 pl-1">
              <SidebarMenu>
                {sideBarItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={
                        pathname === item.url ? "bg-gray-100" : "bg-white"
                      }
                    >
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
