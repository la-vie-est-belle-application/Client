"use client";

import { useCallback, useEffect, useState } from "react";
import { fetchConfirmed } from "@views/schedule/manage/schedule-control-bar/api/fetch-confirmed";
import { useUserPositionHook } from "@features/schedule/lib/use-schedule-manage-modal-hook";
import {
  AddUserModal,
  User,
} from "@features/schedule/manage/add-user-modal/ui/add-user-modal";
import { useDateStore } from "@features/schedule/manage/model/useDateStore";
import { RemoveUserName } from "@features/schedule/manage/remove-user-name";
import { supabase } from "@features/schedule/register/create-schedule/api/post-create-schedule";
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@shared/shadcn-ui/components";
import { useConfirmedStore } from "@shared/store";

export const PositionTable = () => {
  const selectedDate = useDateStore((state) => state.date);
  const [userPositionData, setUserPositionData] = useState<User[]>();
  const { positionData, setPositionTrained, isLoaded } = useUserPositionHook();
  const isConfirmed = useConfirmedStore((state) => state.isConfirmed);

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

      return userName;
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
        {Object.entries(positionData).map(([position, data]) => {
          return (
            <TableRow key={position}>
              <TableCell className="text-left">{data.name}</TableCell>
              <TableCell className="text-center">
                {filteredUserInfo(position)}
              </TableCell>

              <TableCell className="text-right pr-4">
                <div className="flex justify-end gap-2 pr-4">
                  <div className="flex justify-end">
                    <div className="flex items-center gap-2 ">
                      <div className="grid gap-1 leading-none">
                        <label
                          htmlFor={position}
                          className="text-xs font-medium font-gray-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          교육 여부
                        </label>
                      </div>

                      <Checkbox
                        id={position}
                        checked={isLoaded ? data.isTrained : false}
                        onCheckedChange={(checked: boolean) =>
                          setPositionTrained(position, checked)
                        }
                      />
                    </div>
                  </div>

                  <AddUserModal
                    position={position}
                    onChange={fetchPositionData}
                    isConfirmed={isConfirmed}
                  />

                  <RemoveUserName
                    position={position}
                    name={filteredUserInfo(position) as string}
                    onChange={fetchPositionData}
                    isConfirmed={isConfirmed}
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
