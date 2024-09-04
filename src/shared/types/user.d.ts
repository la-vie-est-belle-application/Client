export type User = {
  kakaoId: string;
  name: string;
  email: string;
  gender: "male" | "female";
  pay: number;
  roleType: boolean;
  confirm: boolean;
};
