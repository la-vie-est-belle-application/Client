"use client";

import React from "react";
import { FaPlus } from "react-icons/fa";
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/index";

export const CreateSchedule = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="primary">
          <FaPlus />
          스케줄 등록
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl">
            스케줄 등록 하시겠습니까?
          </DialogTitle>
        </DialogHeader>

        <div className="flex gap-2 pt-15">
          <Button variant="ghost" className="flex-1" size="lg">
            취소
          </Button>
          <Button variant="primary" className="flex-1" size="lg">
            등록
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
