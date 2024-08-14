export const log = <T>(value: T): void => {
  if (typeof value === "object") {
    console.log("data: ", value);
  } else {
    console.log(`${value}:`, value);
  }
};
