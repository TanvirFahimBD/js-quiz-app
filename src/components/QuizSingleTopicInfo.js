import React from "react";
import { Link } from "react-router-dom";

const QuizSingleTopicInfo = ({ singleTopics }) => {
  const { id, logo, name, total } = singleTopics;
  return (
    <div className="col">
      <div className="card bg-dark text-light">
        <img src={logo} className="card-img-top" alt="..." height={250} />
        <div className="card-body d-flex justify-content-between border">
          <div>
            <h5 className="card-title">{total} Quiz</h5>
            <p className="card-text">{name}</p>
          </div>
          <div>
            <Link to={`/quiz/${id}`}>
              <button className="btn btn-primary">Start Quiz</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizSingleTopicInfo;
