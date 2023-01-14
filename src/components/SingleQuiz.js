import React, { useState } from "react";
import SingleOption from "./SingleOption";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleQuiz = ({ singleQuiz }) => {
  const { options, question, correctAnswer } = singleQuiz;
  const [selected, setSelected] = useState("");
  const handleSelection = (selectedAnswer) => {
    setSelected(selectedAnswer);
    if (correctAnswer === selected) {
      toast.success(selected);
    } else {
      toast.error(selectedAnswer);
    }
  };

  const handleCorrectAnswer = () => {
    toast.success(correctAnswer);
  };

  return (
    <div className="text-center border border-primary p-3 m-4">
      <h3 className="my-5">{question.slice(3, question.length - 4)}</h3>
      <div>
        <ul className="ul-style">
          {options.map((op, index) => (
            <SingleOption
              key={index}
              op={op}
              handleSelection={handleSelection}
              handleCorrectAnswer={handleCorrectAnswer}
            />
          ))}
        </ul>
        <button className="btn btn-danger" onClick={handleCorrectAnswer}>
          👁
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SingleQuiz;
