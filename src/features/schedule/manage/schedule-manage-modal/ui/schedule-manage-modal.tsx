"use client";

import React, { useCallback, useEffect, useState } from "react";
import { FaMinus, FaPlus, FaUser } from "react-icons/fa";
import { toast } from "sonner";
import { useDateStore } from "@views/schedule/manage/schedule-control-bar/model/useDateStore";
import { fetchApplicantList } from "@features/schedule/manage/schedule-manage-modal/api/fetch-applicant-list";
import { postAddUser } from "@features/schedule/manage/schedule-manage-modal/api/post-add-user";
import { putEditUser } from "@features/schedule/manage/schedule-manage-modal/api/put-edit-user";
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
  type: "add" | "edit";
}

export interface User {
  name: string[];
  position: string;
  is_trained: boolean;
}

export const ScheduleManageModal = ({
  label,
  icon,
  type,
}: ScheduleManageModalProps) => {
  const selectedDate = useDateStore((state) => state.date);
  const positionList = [
    "팀장",
    "스캔",
    "메인",
    "드레스",
    "축가",
    "대기실",
    "매니저",
    "안내",
    "드레스실",
  ];
  const [position, setPosition] = useState<string>("");
  const [name, setName] = useState<string[]>([]);
  const [isTrained, setIsTrained] = useState<boolean>(false);
  const [nameList, setNameList] = useState<string[]>([]);
  const [selectCount, setSelectCount] = useState<number[]>([0]);

  const newUser: User = {
    position,
    name,
    is_trained: isTrained,
  };

  const addSelectOption = () => {
    if (selectCount.length >= 3) {
      toast("최대 3명까지만 가능합니다");
      return;
    }
    setSelectCount((prev) => [...prev, prev.length]);
  };

  const removeSelectOption = () => {
    setSelectCount((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
  };

  const getApplicantList = useCallback(async () => {
    const data = await fetchApplicantList(selectedDate);
    setNameList(data);
  }, [selectedDate]);

  const handleUser = () => {
    if (type === "add") {
      postAddUser(newUser, selectedDate);
    } else {
      putEditUser(newUser, selectedDate);
    }
  };

  useEffect(() => {
    getApplicantList();
  }, [getApplicantList]);

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
          <DialogTitle>포지션 인원 수정</DialogTitle>
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
            <Button variant="ghost" className="flex-1">
              취소
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button
              variant="primary"
              className="flex-1"
              onClick={() => handleUser()}
            >
              저장
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
