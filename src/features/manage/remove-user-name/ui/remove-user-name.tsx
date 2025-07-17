import { FaTrash } from "react-icons/fa";
import { deleteUserName } from "@features/manage/remove-user-name/api/delete-user-name";
import { Button } from "@shared/shadcn-ui/components";
import { useSelectedManageDateStore } from "@shared/store/use-selected-manage-date-store/use-selected-manage-date-store";

interface Params {
  position: string;
  name: string;
  onChange: () => void;
  isConfirmed: boolean;
}

export const RemoveUserName = ({
  position,
  name,
  onChange,
  isConfirmed,
}: Params) => {
  const date = useSelectedManageDateStore((state) => state.selectedDate);

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
