"use client";

import React from "react";
import { FaMinus, FaPlus, FaUser } from "react-icons/fa";
import {
  useApplicantHook,
  useSelectOptionHook,
  useUserPositionHook,
} from "@features/schedule/lib/use-schedule-manage-modal-hook";
import { postAddUser } from "@features/schedule/manage/schedule-manage-modal/api/post-add-user";
import { SelectOption } from "@features/select-option";
import {
  Button,
  Checkbox,
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@shared/shadcn-ui/components";

interface ScheduleManageModalProps {
  label: string;
  icon?: React.ReactNode;
}

export interface User {
  id: number;
  name: string[];
  position: string;
  is_trained: boolean;
}

export const ScheduleManageModal = ({
  label,
  icon,
}: ScheduleManageModalProps) => {
  const {
    userId,
    positionList,
    position,
    name,
    isTrained,
    setPosition,
    setName,
    setIsTrained,
  } = useUserPositionHook();

  const { selectCount, addSelectOption, removeSelectOption } =
    useSelectOptionHook();

  const { nameList, selectedDate } = useApplicantHook();

  const newUser: User = {
    id: userId,
    position,
    name,
    is_trained: isTrained,
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary">
          {icon}
          {label}
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>포지션 인원 등록</DialogTitle>
        </DialogHeader>

        <div className="mb-2 mt-4">
          <p className="text-xs font-medium font-gray-500 mb-2">포지션</p>
          <SelectOption
            className="w-full"
            icon={<FaUser />}
            selectItem={positionList}
            onValueChange={setPosition}
          />
        </div>

        <div className="overflow-y-scroll max-h-[200px]">
          {selectCount.map((count) => (
            <div className="flex flex-col" key={count}>
              <div>
                <p className="text-xs font-medium font-gray-500 mb-2">이름</p>
              </div>

              <div className="items-top flex space-x-2 items-center mb-2">
                <SelectOption
                  className="w-4/5"
                  icon={<FaUser />}
                  selectItem={nameList}
                  onValueChange={(name) => setName((prev) => [...prev, name])}
                />

                <div className="flex items-center gap-2 w-1/5">
                  <Checkbox
                    id="terms1"
                    checked={isTrained}
                    onCheckedChange={(checked: boolean) =>
                      setIsTrained(checked)
                    }
                  />
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
          ))}
        </div>

        <div className="flex gap-2">
          <Button
            variant="remove"
            className="mb-6 flex-1"
            onClick={() => removeSelectOption()}
          >
            <FaMinus />
            인원 빼기
          </Button>

          <Button
            variant="primary"
            className="mb-6 flex-1"
            onClick={() => addSelectOption()}
          >
            <FaPlus />
            인원 추가
          </Button>
        </div>

        <div className="flex gap-2">
          <DialogClose asChild>
            <Button
              variant="ghost"
              className="flex-1"
              onClick={() => setName([])}
            >
              취소
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button
              variant="primary"
              className="flex-1"
              onClick={() => postAddUser(newUser, selectedDate)}
            >
              저장
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
