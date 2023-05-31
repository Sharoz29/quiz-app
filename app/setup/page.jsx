"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectAllOptionsData } from "../store/optionsdata/optionsdataSlice";
import { addOption } from "../store/options/optionsSlice";

const SetUp = () => {
  const [difficulty, setDifficulty] = useState("");
  const [topic, setTopic] = useState("");
  const [totalNumber, setTotalNumber] = useState("");
  const dispatch = useDispatch();

  const quizOptions = useSelector(selectAllOptionsData);

  const submitForm = (e) => {};
  const selectDifficulty = (e) => {
    const difficultyLevel = e.target.value;
    setDifficulty(difficultyLevel);
  };

  const selectTopic = (e) => {
    const selectedTopic = e.target.value;
    setTopic(selectedTopic);
    console.log(selectedTopic);
  };
  const selectNumber = (e) => {
    const numberOfQuestions = e.target.value;
    setTotalNumber(numberOfQuestions);
  };
  if (difficulty && topic && totalNumber) {
    dispatch(addOption([totalNumber, topic, difficulty]));
  }
  return (
    <div className="quiz-page">
      <h1 className="quiz-setup-title">Quiz Setup</h1>
      <div className="quiz-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Number Of Questions:
            <input
              className="text-black mx-4 option"
              type="number"
              placeholder="Enter the number of questions in the quiz"
              required={true}
              max={10}
              onChange={selectNumber}
              min={1}
            />
          </label>
          <label>
            Select Category:
            <select className="text-black option" onChange={selectTopic}>
              {quizOptions?.map((option, i) => (
                <option value={option.id} key={i}>
                  {option.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Select Difficulty:
            <select className="text-black option" onChange={selectDifficulty}>
              <option value="any">Any Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>
          {
            <Link href="/quizpage">
              <button
                className="quiz-start-btn"
                onClick={submitForm}
                type="button"
              >
                Start Quiz!
              </button>
            </Link>
          }
        </form>
      </div>
    </div>
  );
};
export default SetUp;
