import React from "react";
import { FaPlus, FaUser } from "react-icons/fa";
import { Button } from "@/components/ui";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SelectOption } from "./select";

export const ScheduleModal = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>포지션 인원 수정</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="mb-4">
          <p className="text-xs font-medium font-gray-500 mb-2">포지션</p>
          <SelectOption icon={<FaUser />} />
        </div>

        <div>
          <p className="text-xs font-medium font-gray-500 mb-2">인원</p>
          <SelectOption icon={<FaUser />} />
        </div>

        <Button variant="ghost">
          <FaPlus />
          인원 추가
        </Button>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button variant="ghost" className="flex-1">
          취소
        </Button>
        <Button variant="primary" className="flex-1">
          저장
        </Button>
      </CardFooter>
    </Card>
  );
};
