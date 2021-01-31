import React from "react";
import "./End.css";
import { Button } from "@material-ui/core";

const End = ({ score, setPosition, setScore, numOfQuestions }) => {
  const onPlayAgainClick = () => {
    setPosition({ start: true, playing: false, end: false });
    setScore(0);
  };
  return (
    <div className="score">
      <h1>Your Score</h1>
      <p>
        {score}/<span>{numOfQuestions}</span>
      </p>
      <Button variant="contained" color="primary" onClick={onPlayAgainClick}>
        Play Again
      </Button>
    </div>
  );
};

export default End;
