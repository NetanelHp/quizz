import React, { useState } from "react";
import "./Card.css";
import Playing from "../Playing/Playing";
import Start from "../Start/Start";
import End from "../End/End";

const Card = () => {
  const [position, setPosition] = useState({
    start: true,
    playing: false,
    end: false,
  });

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(undefined);
  const [score, setScore] = useState(0);

  return (
    <div className="card">
      {position.start && (
        <Start setPosition={setPosition} setQuestions={setQuestions} />
      )}
      {position.playing && <Playing />}
      {position.end && <End />}
    </div>
  );
};

export default Card;
