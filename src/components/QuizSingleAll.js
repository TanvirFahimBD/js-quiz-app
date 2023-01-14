import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "./SingleQuiz";

const QuizSingleAll = () => {
  const QuizSingleAll = useLoaderData();
  const quizQuestions = QuizSingleAll.data.questions;
  return (
    <div className="container">
      {quizQuestions.map((singleQuiz) => (
        <SingleQuiz singleQuiz={singleQuiz} key={singleQuiz.id} />
      ))}
    </div>
  );
};

export default QuizSingleAll;
