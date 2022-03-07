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
    <React.Fragment>
      <p style={style.text}>{count}</p>
      <div style={style.position}>
        <Button title="+" onClick={plus} />
        <Button title="−" onClick={minus} />
      </div>
    </React.Fragment>
  );
};

const style = {
  text: {
    fontSize: "100px",
    color: "black",
    textAlign: "center",
  },
  position: {
    display: "flex",
    justifyContent: "center",
  },
};
