import { Role } from "@constants/role";

export type Roles = keyof typeof Role;

export interface ScheduleList {
  role: Partial<Record<Roles, SelectedUsers>>;
}

export type SelectedUsers = string[];
