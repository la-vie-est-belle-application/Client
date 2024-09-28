import { useEffect, useState } from "react";

import { User } from "@shared/types/user";

const userData = sessionStorage.getItem("userData");

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    userData ? setUser(JSON.parse(userData)) : null;
  }, []);

  return user;
};
