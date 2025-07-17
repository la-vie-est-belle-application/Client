import { User } from "@admin/features/manage/add-user-modal/ui/add-user-modal";
import { supabase } from "@admin/features/register/create-schedule";
import { fetchUserList } from "@admin/shared/api/fetch-user-list";
import {
  errorToast,
  successToast,
  warningToast,
} from "@admin/shared/shadcn-ui/lib/toast";

export const postConfirmed = async (selectedDate: string) => {
  const userList = await fetchUserList(selectedDate);

  const userNameList = userList.map((item: User) => item.name);
  const userName = userNameList.flat();

  if (userName.length < 11) {
    warningToast("아직 등록하지 않은 유저가 있습니다");
    return { success: false };
  }

  const { error } = await supabase
    .from("schedules")
    .update({ is_confirmed: true })
    .eq("date", selectedDate);

  if (error) {
    console.error("스케줄 확정 실패:", error);
    errorToast("스케줄 확정에 실패했습니다.");
    return { success: false };
  }

  successToast("스케줄 확정되었습니다.");
  return { success: true };
};
