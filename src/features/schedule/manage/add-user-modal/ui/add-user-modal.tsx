"use client";

import { FaMinus, FaPlus, FaUser, FaUserPlus } from "react-icons/fa";
import {
  useApplicantHook,
  useSelectOptionHook,
  useUserPositionHook,
} from "@features/schedule/lib/use-schedule-manage-modal-hook";
import { postAddUser } from "@features/schedule/manage/add-user-modal/api/post-add-user";
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

export interface User {
  id: number;
  name: string[];
  position: string;
  is_trained: boolean;
}

export const AddUserModal = ({ position }: { position: string }) => {
  const {
    userId,
    name,
    isTrained,
    setName,
    setIsTrained,
    setSelectedNameIndex,
  } = useUserPositionHook();

  const { selectCount, setSelectCount, addSelectOption, removeSelectOption } =
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

        <div className="flex justify-end">
          <div className="flex items-center gap-2 ">
            <div className="grid gap-1 leading-none">
              <label
                htmlFor="terms1"
                className="text-xs font-medium font-gray-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                교육 여부
              </label>
            </div>

            <Checkbox
              id="terms1"
              checked={isTrained}
              onCheckedChange={(checked: boolean) => setIsTrained(checked)}
            />
          </div>
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

          <DialogClose asChild>
            <Button
              variant="primary"
              className="flex-1"
              onClick={() => {
                postAddUser(newUser, selectedDate);
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
