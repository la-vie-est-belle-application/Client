"use client";

import { useCallback, useEffect, useState } from "react";
import { useUserPositionHook } from "@features/schedule/lib/use-schedule-manage-modal-hook";
import {
  AddUserModal,
  User,
} from "@features/schedule/manage/add-user-modal/ui/add-user-modal";
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

  const filteredUserInfo = useCallback(
    (position: string) => {
      const userData = userPositionData?.filter(
        (user) => user.position === position,
      );

      const userName = userData?.flatMap((user) => user.name).join(", ") || "";
      const isTrained = userData?.some((user) => user.is_trained);

      return { userName, isTrained };
    },
    [userPositionData],
  );

  useEffect(() => {
    fetchPositionData();
  }, [fetchPositionData]);

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
          const { userName, isTrained } = filteredUserInfo(position);
          const trained = isTrained ? "(교육)" : "";

          return (
            <TableRow key={position}>
              <TableCell className="text-left">{position}</TableCell>
              <TableCell className="text-center">
                {`${userName}${userName && trained}`}
              </TableCell>

              <TableCell className="text-right pr-4">
                <div className="flex justify-end gap-2">
                  <AddUserModal
                    position={position}
                    onChange={fetchPositionData}
                  />

                  <RemoveUserName
                    position={position}
                    name={userName as string}
                    onChange={fetchPositionData}
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
