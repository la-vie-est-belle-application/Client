import React from "react";
import { FaTrash } from "react-icons/fa";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@shared/shadcn-ui/components";

export const RemoveSchedule = () => {
  return (
    <Dialog>
      <DialogTrigger
        className="bg-red-100 hover:bg-red-200 
    text-red-500
    cursor-pointer px-4 py-2 rounded-md h-9 ml-2"
      >
        <div className="flex items-center gap-1 text-sm font-medium">
          <FaTrash />
          스케줄 삭제
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>스케줄을 정말 삭제하시겠습니까?</DialogTitle>
        </DialogHeader>

        <div className="flex gap-2">
          <DialogClose asChild>
            <Button variant="ghost" className="flex-1">
              취소
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button variant="primary" className="flex-1">
              삭제
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};
