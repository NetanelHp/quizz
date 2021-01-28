import React, { useState } from "react";
import "./Start.css";
import axios from "axios";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Switch from "@material-ui/core/Switch";

const Start = ({ setPosition, setQuestions }) => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(undefined);
  const [numOfQuestions, setNumOfQuestions] = useState(5);

  const onCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const onNumOfQuestionsChange = (e) => {
    setNumOfQuestions(e.target.value);
  };

  return (
    <div className="start">
      <h1>Welcome buddy!</h1>
      <h3>Lets play some trivia</h3>
      <div className="options">
        <Select
          className="num-of-questions"
          label="Number Of Questions"
          value={numOfQuestions}
          onChange={onNumOfQuestionsChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
        </Select>
        <Select
          className="category"
          value={category}
          onChange={onCategoryChange}
        >
          <MenuItem value={9}>General</MenuItem>
          <MenuItem value={23}>Sports</MenuItem>
          <MenuItem value={27}>Animals</MenuItem>
        </Select>
      </div>
      <h3>Hardcore Mode</h3>
      <Switch />
    </div>
  );
};

export default Start;
