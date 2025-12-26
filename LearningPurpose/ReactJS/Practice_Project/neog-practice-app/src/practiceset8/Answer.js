import React, { useContext } from "react";
import { ExamContext } from "./ExamContext";
import { useParams } from "react-router-dom";

const Answer = () => {
  const { id } = useParams();
  const { allExams } = useContext(ExamContext);
  const selectedQuestion = allExams.find((ques) => ques.id === parseInt(id));
  console.log(selectedQuestion)
  if (!selectedQuestion) {
    return <p>Loading question or question not found!</p>;
  }

  return (
    <React.Fragment>
      <h2>Question:</h2>
      <p>{selectedQuestion.question}</p>
      <h3>Answers:</h3>
      <p>{selectedQuestion.answer}</p>
    </React.Fragment>
  );
};

export default Answer;
