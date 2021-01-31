import React, { useState, useEffect } from "react";
import "./Playing.css";
import Answer from "./Answer";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

const Playing = ({ questions, setScore, score, setPosition }) => {
  const [idx, setIdx] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[idx]);
  const [answeredQuestion, setAnsweredQuestioned] = useState("");
  const [shuffledAnswers, setShuffledAnswered] = useState([]);

  useEffect(() => {
    const shuffledAnswers = [
      currentQuestion.correct_answer,
      ...currentQuestion.incorrect_answers,
    ].sort(() => Math.random() - 0.5);
    setShuffledAnswered(shuffledAnswers);
  }, [currentQuestion]);

  const onNextBtnClick = () => {
    if (!answeredQuestion) return;
    if (answeredQuestion === currentQuestion.correct_answer) {
      setScore(score + 1);
    }
    if (idx + 1 === questions.length) {
      setPosition({ start: false, playing: false, end: true });
      return;
    }
    setCurrentQuestion(questions[idx + 1]);
    setIdx(idx + 1);
    setAnsweredQuestioned("");
  };

  return (
    <div className="playing">
      <h1>
        Question <span>{idx + 1}</span>/{questions.length}
      </h1>
      <p dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
      <Grid container justify="center" spacing={4} style={{ marginTop: 25 }}>
        <Answer
          setAnsweredQuestioned={setAnsweredQuestioned}
          answer={shuffledAnswers[0]}
          clicked={answeredQuestion}
        />
        <Answer
          setAnsweredQuestioned={setAnsweredQuestioned}
          answer={shuffledAnswers[1]}
          clicked={answeredQuestion}
        />
        <Answer
          setAnsweredQuestioned={setAnsweredQuestioned}
          answer={shuffledAnswers[2]}
          clicked={answeredQuestion}
        />
        <Answer
          setAnsweredQuestioned={setAnsweredQuestioned}
          answer={shuffledAnswers[3]}
          clicked={answeredQuestion}
        />
      </Grid>
      <Button
        onClick={onNextBtnClick}
        color="primary"
        variant="contained"
        style={{
          marginTop: 46,
          borderRadius: 50,
          color: "white",
        }}
      >
        <ArrowForwardIosIcon />
      </Button>
    </div>
  );
};

export default Playing;
