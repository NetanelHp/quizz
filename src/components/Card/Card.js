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
  const [score, setScore] = useState(0);

  return (
    <div className="card">
      {position.start && (
        <Start setPosition={setPosition} setQuestions={setQuestions} />
      )}
      {position.playing && (
        <Playing
          questions={questions}
          score={score}
          setScore={setScore}
          setPosition={setPosition}
        />
      )}
      {position.end && (
        <End
          score={score}
          setPosition={setPosition}
          setScore={setScore}
          numOfQuestions={questions.length}
        />
      )}
    </div>
  );
};

export default Card;
