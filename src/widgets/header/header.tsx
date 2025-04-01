import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className="flex items-center justify-between p-4 z-99 fixed w-full bg-white border-b border-gray-200">
      <div className="flex items-center gap-8">
        <div>로고</div>
        <div>
          <Button variant="ghost" className="mr-0.5 px-3">
            <Link href="/schedule" className="text-sm font-bold">
              스케줄
            </Link>
          </Button>
          <Button variant="ghost" className="px-3">
            <Link href="/member" className="text-sm font-bold">
              직원 관리
            </Link>
          </Button>
        </div>
      </div>
      <div>유저프로필</div>
    </nav>
  );
};
