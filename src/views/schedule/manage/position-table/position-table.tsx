"use client";

import { useCallback, useEffect, useState } from "react";
import { useDateStore } from "@views/schedule/manage/schedule-control-bar/model/useDateStore";
import { User } from "@features/schedule/manage/add-user-modal/ui/add-user-modal";
import { EditUserModal } from "@features/schedule/manage/edit-modal/index";
import { supabase } from "@features/schedule/register/create-schedule/api/post-create-schedule";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@shared/shadcn-ui/components";

export const PositionTable = () => {
  const selectedDate = useDateStore((state) => state.date);
  const [userPositionData, setUserPositionData] = useState<User[]>();

  const fetchPositionData = useCallback(async () => {
    try {
      if (!selectedDate) return;

      const { data, error } = await supabase
        .from("schedules")
        .select("user_list")
        .eq("date", selectedDate);

      if (error) {
        console.error("데이터를 불러오는 중 에러가 발생했습니다:", error);
        return;
      }

      if (data && data.length > 0) {
        setUserPositionData(data[0].user_list);
      } else {
        setUserPositionData([]);
      }
    } catch (error) {
      console.error("예상치 못한 에러가 발생했습니다:", error);
    }
  }, [selectedDate]);

  const renderUserName = (user: User) => {
    if (Array.isArray(user.name)) {
      return user.name.map((name: string) => name).join(", ");
    }
    return user.name;
  };

  useEffect(() => {
    fetchPositionData();
  }, [fetchPositionData, userPositionData]);

  return (
    <Table className="bg-white w-full">
      <TableHeader>
        <TableRow className="bg-gray-100">
          <TableHead>포지션</TableHead>
          <TableHead className="text-center">이름</TableHead>
          <TableHead className="text-center"></TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {userPositionData?.map((user, index) => (
          <TableRow key={index}>
            <TableCell className="text-left">{user.position}</TableCell>
            <TableCell className="text-center">
              {renderUserName(user)}
            </TableCell>
            <TableCell className="text-right pr-4">
              <EditUserModal />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
