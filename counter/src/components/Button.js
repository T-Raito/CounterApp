import React, { useState } from "react";

export const Button = ({ title }) => {
  return (
    <div>
      <button>{title}</button>
      <button>ボタン</button>
    </div>
  );
};
