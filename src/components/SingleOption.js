import React from "react";
import "./style.css";

const SingleOption = ({ op, handleSelection }) => {
  return (
    <li className="border rounded p-2 m-2 cursor-style">
      <span onClick={() => handleSelection(op)}>{op}</span>
    </li>
  );
};

export default SingleOption;
