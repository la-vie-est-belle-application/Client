import { Roles } from "src/types/schedule";
import { create } from "zustand";

const useSelectedRoleStore = create<{
  selectedRole: Roles | null;
  updateSelectedRole: (role: Roles) => void;
}>((set) => ({
  selectedRole: null,
  updateSelectedRole: (role) => set(() => ({ selectedRole: role })),
}));

export default useSelectedRoleStore;
