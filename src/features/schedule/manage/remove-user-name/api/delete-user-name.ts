import { User } from "@features/schedule/manage/add-user-modal/ui/add-user-modal";
import { fetchUserList } from "@features/schedule/manage/api/fetch-user-list";
import { supabase } from "@features/schedule/register/create-schedule/api/post-create-schedule";
import { errorToast, successToast } from "@shared/shadcn-ui/lib/toast";

interface Params {
  position: string;
  date: string;
  onChange: () => void;
}

export const deleteUserName = async ({ position, date, onChange }: Params) => {
  try {
    const userList = await fetchUserList(date);

    const existingUserIndex = userList.findIndex(
      (user: User) => user.position === position,
    );

    if (existingUserIndex !== -1) {
      userList[existingUserIndex].name.pop();

      const { error: updateError } = await supabase
        .from("schedules")
        .update({ user_list: userList })
        .eq("date", date);

      if (updateError) {
        console.error("사용자 삭제 중 에러가 발생했습니다:", updateError);
        throw updateError;
      }
    }

    successToast("사용자 삭제 완료!");
    onChange();
  } catch (error) {
    console.error("사용자 삭제 중 예상치 못한 에러가 발생했습니다:", error);
    errorToast("사용자 삭제에 실패했습니다.");
  }
};
