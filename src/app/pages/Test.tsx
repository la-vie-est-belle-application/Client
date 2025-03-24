import React from "react";

import { Test2 } from "./Test2";
import { Testhook } from "../hooks/Testhook";

export const Test = () => {
  const { test } = Testhook();
  return (
    <div>
      <Test2 />
    </div>
  );
};
