import { toast } from "sonner";
import { User } from "@features/schedule/manage/add-user-modal/ui/add-user-modal";
import { fetchUserList } from "@features/schedule/manage/api/fetch-user-list";
import { supabase } from "@features/schedule/register/create-schedule/api/post-create-schedule";

export const deleteUserName = async (position: string, date: string) => {
  try {
    const userList = await fetchUserList(date);

    const updatedUserList = userList.filter(
      (user: any) => user.position !== position,
    );

    const { error: updateError } = await supabase
      .from("schedules")
      .update({ user_list: updatedUserList })
      .eq("date", date);

    if (updateError) {
      console.error("사용자 삭제 중 에러가 발생했습니다:", updateError);
      throw updateError;
    }

    toast("사용자 삭제 완료!");
  } catch (error) {
    console.error("사용자 삭제 중 예상치 못한 에러가 발생했습니다:", error);
    toast("사용자 삭제에 실패했습니다.");
  }
};
