import React from "react";
import { SideBar } from "@/src/widgets/side-bar";

export const ScheduleManagePage = () => {
  return (
    <main className="flex h-screen pt-17 bg-gray-100 overflow-scroll">
      <SideBar />
      <section className="w-full h-full">
        <div className="mt-6 ml-6">
          <h1 className="text-2xl font-bold mb-4">스케줄 관리</h1>
          <p className="text-sm text-gray-500">
            웨딩홀 스케줄 일정을 손쉽게 관리해 보세요
          </p>
        </div>
      </section>
    </main>
  );
};
