export function getCurrentDate() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const thisMonth = `${currentYear}${String(currentMonth).padStart(2, "0")}`;

  return { currentDate, currentYear, currentMonth, thisMonth };
}
