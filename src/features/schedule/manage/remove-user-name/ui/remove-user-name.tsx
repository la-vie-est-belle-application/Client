import { FaTrash } from "react-icons/fa";
import { useDateStore } from "@features/schedule/manage/model/useDateStore";
import { deleteUserName } from "@features/schedule/manage/remove-user-name/api/delete-user-name";
import { Button } from "@shared/shadcn-ui/components";

export const RemoveUserName = ({ position }: { position: string }) => {
  const date = useDateStore((state) => state.date);

  const handleRemoveUserName = async () => {
    await deleteUserName(position, date);
  };

  return (
    <Button variant="remove" className="p-2" onClick={handleRemoveUserName}>
      <FaTrash />
    </Button>
  );
};
