"use client";

import { FaMinus, FaPlus, FaUser, FaUserPlus } from "react-icons/fa";
import { postAddUser } from "@admin/features/manage/add-user-modal/api/post-add-user";
import { useApplicantHook } from "@admin/features/manage/add-user-modal/lib/use-application-hook";
import { useSelectOptionHook } from "@admin/features/manage/add-user-modal/lib/use-select-option-hook";
import { SelectOption } from "@admin/features/select-option";
import { useUserPositionHook } from "@admin/shared/lib/schedule/use-position-name-hook";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@admin/shared/shadcn-ui/components";

export interface User {
  id: number;
  name: string[];
  position: string;
  is_trained: boolean;
}

export const AddUserModal = ({
  position,
  onChange,
  isConfirmed,
}: {
  position: string;
  onChange: () => void;
  isConfirmed: boolean;
}) => {
  const { userId, name, setName, setSelectedNameIndex } = useUserPositionHook();

  const { selectCount, setSelectCount, addSelectOption, removeSelectOption } =
    useSelectOptionHook();

  const { nameList, selectedDate } = useApplicantHook();

  const newUser: User = {
    id: userId,
    position,
    name,
    is_trained: false,
  };

  const isNameEmpty = name.every((name) => name === "");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primary" disabled={isConfirmed}>
          <FaUserPlus />
          추가
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-4">포지션 인원 등록</DialogTitle>
        </DialogHeader>

        <div className="overflow-y-scroll max-h-[200px]">
          {selectCount.map((count) => (
            <div className="flex flex-col" key={count}>
              <div>
                <p className="text-xs font-medium font-gray-500 mb-2">이름</p>
              </div>

              <div className="items-top flex space-x-2 items-center mb-2">
                <SelectOption
                  className="w-full"
                  icon={<FaUser />}
                  selectItem={nameList}
                  disabledItems={name}
                  onValueChange={(selectedName) => {
                    setSelectedNameIndex(count);
                    setName((prev) => {
                      const newNames = [...prev];
                      newNames[count] = selectedName;
                      return newNames;
                    });
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <Button
            variant="remove"
            className="mb-6 flex-1"
            onClick={() => {
              removeSelectOption();
              setName((prev) => prev.slice(0, -1));
            }}
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
              onClick={() => {
                setName([]);
                setSelectCount([0]);
              }}
            >
              취소
            </Button>
          </DialogClose>

          <DialogClose asChild disabled={isNameEmpty}>
            <Button
              variant="primary"
              className="flex-1"
              onClick={() => {
                postAddUser(newUser, selectedDate, onChange);
                setName([]);
                setSelectCount([0]);
              }}
            >
              저장
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
