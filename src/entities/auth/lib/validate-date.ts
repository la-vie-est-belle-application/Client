export const isValidDate = (
  year: string,
  month: string,
  day: string,
): boolean => {
  if (!year || !month || !day) return false;
  const date = new Date(`${year}-${month}-${day}`);
  return (
    date.getFullYear().toString() === year &&
    (date.getMonth() + 1).toString() === month &&
    date.getDate().toString() === day
  );
};
