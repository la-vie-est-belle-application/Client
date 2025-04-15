"use client";

import React from "react";
import { FaPlus, FaUser } from "react-icons/fa";
import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/index";
import { SelectOption } from "@/src/feature/select-option/index";

export const ScheduleManageModal = () => {
  return (
    <Dialog>
      <DialogTrigger
        className="bg-primary hover:bg-primary-foreground 
        text-primary text-white
        cursor-pointer px-4 py-2 rounded-md h-9"
      >
        수정
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>포지션 인원 수정</DialogTitle>
        </DialogHeader>

        <div className="mb-2 mt-4">
          <p className="text-xs font-medium font-gray-500 mb-2">포지션</p>
          <SelectOption className="w-full" icon={<FaUser />} />
        </div>

        <div className="flex flex-col">
          <div>
            <p className="text-xs font-medium font-gray-500 mb-2">이름</p>
          </div>

          <div className="items-top flex space-x-2 items-center mb-2">
            <SelectOption className="w-4/5" icon={<FaUser />} />

            <div className="flex items-center gap-2 w-1/5">
              <Checkbox id="terms1" />
              <div className="grid gap-1 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  교육 여부
                </label>
              </div>
            </div>
          </div>
        </div>

        <Button variant="primary" className="mb-6">
          <FaPlus />
          인원 추가
        </Button>

        <div className="flex gap-2">
          <Button variant="ghost" className="flex-1">
            취소
          </Button>
          <Button variant="primary" className="flex-1">
            저장
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
