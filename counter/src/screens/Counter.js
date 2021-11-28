import React, { useState } from "react";
import { Button } from "../components/Button";

export const Counter = () => {
  //Hooks
  //const[state,setState]=useState(初期値)
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p style={{ fontSize: 40 }}>0</p>
      <Button title="プラス" />
      <Button title="マイナス" />
    </div>
  );
};
