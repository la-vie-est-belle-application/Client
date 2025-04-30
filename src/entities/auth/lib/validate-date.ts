interface ParsedDate  {
  year: number;
  month: number;
  day: number;
}

export const isValidDate = (dateStr: string): boolean => {
  const isEightDigits = (dateStr: string) => /^\d{8}$/.test(dateStr);
  
  const splitDateString = (dateStr: string): ParsedDate  => ({
    year: parseInt(dateStr.slice(0, 4)),
    month: parseInt(dateStr.slice(4, 6)),
    day: parseInt(dateStr.slice(6, 8)),
  });

  const isRealDate = ({year, month, day}: ParsedDate ): boolean => {
    const date = new Date(year, month - 1, day);
    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    )
  }

  return isEightDigits(dateStr) && isRealDate(splitDateString(dateStr))

};

