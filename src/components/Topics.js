import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizSingleTopicInfo from "./QuizSingleTopicInfo";
import TopView from "./TopView";

const Topics = () => {
  const { data } = useLoaderData();
  return (
    <div className="container">
      <TopView />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.map((singleTopics) => (
          <QuizSingleTopicInfo
            key={singleTopics.id}
            singleTopics={singleTopics}
          />
        ))}
      </div>
    </div>
  );
};

export default Topics;
