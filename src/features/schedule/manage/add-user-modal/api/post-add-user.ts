import { toast } from "sonner";
import { fetchUserList } from "@features/schedule/manage/add-user-modal/api/fetch-user-list";
import { User } from "@features/schedule/manage/add-user-modal/ui/add-user-modal";
import { supabase } from "@features/schedule/register/create-schedule";
import { successToast, warningToast } from "@shared/shadcn-ui/lib/toast";

export const postAddUser = async (
  newUser: User,
  selectedDate: string,
  onChange: () => void,
) => {
  const existingData = await fetchUserList(selectedDate);

  // 같은 포지션의 기존 사용자가 있는지 확인
  const existingUserIndex = existingData.findIndex(
    (user: User) => user.position === newUser.position,
  );

  if (existingUserIndex !== -1) {
    // 같은 포지션이 존재하는 경우, 이름 배열에 새 이름들을 추가
    const existingUser = existingData[existingUserIndex];

    // 중복 이름 체크
    const isDuplicateName = newUser.name.some((newName) =>
      existingUser.name.includes(newName),
    );

    if (isDuplicateName) {
      warningToast("이미 등록된 이름입니다.");
      return;
    }

    // 기존 이름 배열에 새 이름들을 추가
    existingUser.name = [...existingUser.name, ...newUser.name];
  } else {
    // 새로운 포지션인 경우, 새 사용자 추가
    const isDuplicateName = existingData.some((user: User) =>
      user.name.some((existingName) => newUser.name.includes(existingName)),
    );

    if (isDuplicateName) {
      warningToast("이미 등록된 이름입니다.");
      return;
    }

    existingData.push(newUser);
  }

  const { error } = await supabase
    .from("schedules")
    .update({ user_list: existingData })
    .eq("date", selectedDate)
    .select();

  if (error) {
    console.error("업데이트 실패:", error);
    return;
  }

  successToast("등록되었습니다.");
  onChange();
};
