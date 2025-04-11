"use client";

import React from "react";
import { Button } from "@/components/ui/index";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-between p-4 z-99 fixed w-full bg-white border-b border-gray-200">
      <div className="flex items-center gap-8">
        <div>로고</div>
        <div className="relative">
          <Button variant="ghost" className={"mr-0.5 px-3"}>
            <Link
              href="/schedule-dashboard/register"
              className="text-sm font-bold"
            >
              스케줄
            </Link>
          </Button>

          <Button variant="ghost" className={"px-3"}>
            <Link href="/member-dashboard" className="text-sm font-bold">
              직원 관리
            </Link>
          </Button>

          <div
            className={`absolute bottom-0 h-0.5 bg-blue-500 transition-all duration-300 ease-in-out ${
              pathname?.includes("/schedule-dashboard")
                ? "left-0 w-[60px]"
                : pathname?.includes("/member-dashboard")
                  ? "left-[65px] w-[70px]"
                  : "w-0"
            }`}
          />
        </div>
      </div>
      <div>유저프로필</div>
    </nav>
  );
};
