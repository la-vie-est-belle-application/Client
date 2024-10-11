import { User } from "@shared/types/user";

const USER_LOCALSTORAGE_KEY = "user";

export const getStoredUserData = (): User | null => {
  const storedLoginData = localStorage.getItem(USER_LOCALSTORAGE_KEY);

  if (!storedLoginData) {
    return null;
  }

  try {
    return JSON.parse(storedLoginData);
  } catch {
    return null;
  }
};

export const setStoredUserData = (userData: User) => {
  localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(userData));
};

export const clearStoredUserData = (): void => {
  localStorage.removeItem(USER_LOCALSTORAGE_KEY);
};
