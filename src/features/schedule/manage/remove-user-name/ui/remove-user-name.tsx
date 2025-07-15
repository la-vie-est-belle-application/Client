import { FaTrash } from "react-icons/fa";
import { useDateStore } from "@features/schedule/manage/model/useDateStore";
import { deleteUserName } from "@features/schedule/manage/remove-user-name/api/delete-user-name";
import { Button } from "@shared/shadcn-ui/components";

export const RemoveUserName = ({
  position,
  name,
  onChange,
  isConfirmed,
}: {
  position: string;
  name: string;
  onChange: () => void;
  isConfirmed: boolean;
}) => {
  const date = useDateStore((state) => state.date);

  const handleRemoveUserName = async () => {
    await deleteUserName({ position, date, onChange });
  };

  return (
    <Button
      variant="remove"
      className="p-2"
      onClick={handleRemoveUserName}
      disabled={!name || isConfirmed}
    >
      <FaTrash />
    </Button>
  );
};
