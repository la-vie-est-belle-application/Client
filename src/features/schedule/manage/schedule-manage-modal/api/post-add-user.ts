import { toast } from "sonner";
import { fetchUserList } from "@features/schedule/manage/schedule-manage-modal/api/fetch-user-list";
import { User } from "@features/schedule/manage/schedule-manage-modal/ui/schedule-manage-modal";
import { supabase } from "@features/schedule/register/create-schedule";

export const postAddUser = async (newUser: User, selectedDate: string) => {
  const existingData = await fetchUserList(selectedDate);

  const isDuplicateName = existingData.some(
    (user: User) => user.name === newUser.name,
  );

  const isDuplicatePosition = existingData.some(
    (user: User) => user.position === newUser.position,
  );

  if (isDuplicateName || isDuplicatePosition) {
    toast("이미 등록된 이름 또는 포지션입니다.");
    return;
  }

  existingData.push(newUser);

  const { error } = await supabase
    .from("schedules")
    .update({ user_list: existingData })
    .eq("date", selectedDate)
    .select();

  if (error) {
    console.error("업데이트 실패:", error);
    return;
  }

  toast("등록되었습니다.");
};
