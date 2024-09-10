import { roles } from "./../constants/roles";

export type User = {
  kakaoId: string;
  name: string;
  email: string;
  gender: "male" | "female";
  pay: number;
  roleType: boolean;
  confirm: boolean;
};

export type Roles = keyof typeof roles;
