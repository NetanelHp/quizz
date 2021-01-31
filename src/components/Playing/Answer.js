import React from "react";
import { Grid } from "@material-ui/core";

const Answer = ({ answer, setAnsweredQuestioned, clicked }) => {
  const onAnswerClick = () => {
    setAnsweredQuestioned(answer);
  };
  return (
    <Grid item xs={12} md={6}>
      <button
        className={clicked === answer ? "answer-btn clicked" : "answer-btn"}
        onClick={onAnswerClick}
      >
        {answer}
      </button>
    </Grid>
  );
};

export default Answer;
