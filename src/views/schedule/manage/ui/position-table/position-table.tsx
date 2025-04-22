"use client";

import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/index";
import { ScheduleManageModal } from "@/src/feature/schedule/schedule-manage-modal/index";

export const PositionTable = () => {
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
        <TableRow>
          <TableCell className="text-left">팀장</TableCell>
          <TableCell>윤태관</TableCell>
          <TableCell className="text-right pr-4">
            <ScheduleManageModal />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
