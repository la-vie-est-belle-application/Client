import { useState } from "react";

export const Testhook = () => {
  const [test, setTest] = useState(null);
  return {
    test,
    setTest,
  };
};
