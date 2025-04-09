import React from "react";
import { FaPlus, FaUser } from "react-icons/fa";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
} from "@/components/ui/index";
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

        <div className="flex flex-col">
          <div>
            <p className="text-xs font-medium font-gray-500 mb-2">이름</p>
          </div>

          <div className="items-top flex space-x-2 items-center mb-4">
            <SelectOption icon={<FaUser />} />
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                교육 여부
              </label>
            </div>
          </div>
        </div>

        <Button variant="primary">
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
