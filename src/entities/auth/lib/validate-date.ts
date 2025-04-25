export const isValidDate = (val: string): boolean => {
  if (val.length !== 8) return false;

  const year = parseInt(val.slice(0, 4));
  const month = parseInt(val.slice(4, 6));
  const day = parseInt(val.slice(6, 8));

  if (month < 1 || month > 12) return false;

  if (day < 1 || day > 31) return false;

  const date = new Date(year, month - 1, day);
  const isValid =
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day;

  return isValid;
};
