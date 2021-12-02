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
      <p style={style.text}>{count}</p>
      <div style={style.position}>
        <button onClick={plus} style={style.button}>
          <Button title="+" />
        </button>
        <button onClick={minus} style={style.button}>
          <Button title="-" />
        </button>
      </div>
    </div>
  );
};

const style = {
  text: {
    fontSize: "100px",
    color: "black",
    textAlign: "center",
  },
  button: {
    fontSize: "20px",
    height: "50px",
    width: "100px",
    backgroundColor: "#b4c1d1",
    borderRadius: "100vh",
    border: "2px ridge #b4c1d1",
  },
  position: {
    display: "flex",
    justfyContent: "center",
  },
};
