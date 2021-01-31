import React, { useState } from "react";
import "./Start.css";
import axios from "axios";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Switch from "@material-ui/core/Switch";
import { Button } from "@material-ui/core";

import CircularProgress from "@material-ui/core/CircularProgress";

const Start = ({ setPosition, setQuestions }) => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(9);
  const [numOfQuestions, setNumOfQuestions] = useState(5);
  const [hardcore, setHardcore] = useState(false);

  const onCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const onNumOfQuestionsChange = (e) => {
    setNumOfQuestions(e.target.value);
  };

  const onHardcoreChange = () => {
    setHardcore(!hardcore);
  };

  const onBtnClick = async () => {
    try {
      setLoading(true);
      const res = await axios({
        method: "GET",
        baseURL: "https://opentdb.com/api.php",
        params: {
          amount: numOfQuestions,
          category,
          difficulty: hardcore ? "hard" : "easy",
          type: "multiple",
        },
      });
      setLoading(false);
      setQuestions(res.data.results);
      setPosition({
        start: false,
        playing: true,
        end: false,
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="start">
      <h1>Welcome buddy!</h1>
      <h3 className="sub-title">Lets play some trivia</h3>
      <div className="options">
        <div className="num-of-questions">
          <h4>Number Of Questions</h4>
          <Select
            variant="outlined"
            className="switch"
            value={numOfQuestions}
            onChange={onNumOfQuestionsChange}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
          </Select>
        </div>
        <div className="category">
          <h4>Category</h4>
          <Select
            variant="outlined"
            className="switch"
            value={category}
            onChange={onCategoryChange}
          >
            <MenuItem value={9}>General</MenuItem>
            <MenuItem value={21}>Sports</MenuItem>
            <MenuItem value={27}>Animals</MenuItem>
          </Select>
        </div>
      </div>
      <div className="hardcore">
        <h3>Hardcore Mode</h3>
        <Switch checked={hardcore} onChange={onHardcoreChange} />
      </div>
      <Button
        startIcon={
          loading && (
            <CircularProgress
              color="primary"
              size={16}
              style={{ color: "white" }}
            />
          )
        }
        onClick={onBtnClick}
        style={{ marginTop: 20 }}
        variant="contained"
        color="secondary"
      >
        Play
      </Button>
    </div>
  );
};

export default Start;
