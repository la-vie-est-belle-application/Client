"use client";

import { useCallback, useEffect, useState } from "react";
import { useUserPositionHook } from "@features/schedule/lib/use-schedule-manage-modal-hook";
import {
  AddUserModal,
  User,
} from "@features/schedule/manage/add-user-modal/ui/add-user-modal";
import { EditUserModal } from "@features/schedule/manage/edit-modal/index";
import { useDateStore } from "@features/schedule/manage/model/useDateStore";
import { RemoveUserName } from "@features/schedule/manage/remove-user-name";
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
  const { positionList } = useUserPositionHook();

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

  const filteredUserName = (position: string) => {
    const userName = userPositionData?.filter(
      (user) => user.position === position,
    );

    return userName?.map((user) => user.name).join(", ");
  };

  useEffect(() => {
    fetchPositionData();
  }, [fetchPositionData, userPositionData]);

  return (
    <Table className="bg-white w-full">
      <TableHeader>
        <TableRow className="bg-gray-100">
          <TableHead>포지션</TableHead>
          <TableHead className="text-center w-2/2">이름</TableHead>
          <TableHead className="text-center w-1/4"></TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {positionList.map((position) => {
          const userName = filteredUserName(position);

          return (
            <TableRow key={position}>
              <TableCell className="text-left">{position}</TableCell>
              <TableCell className="text-center">{userName}</TableCell>

              <TableCell className="text-right pr-4">
                <div className="flex justify-end gap-2">
                  <AddUserModal position={position} />
                  <RemoveUserName
                    position={position}
                    name={userName as string}
                  />
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
