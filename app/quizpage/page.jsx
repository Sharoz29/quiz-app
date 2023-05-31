"use client";

import { useSelector } from "react-redux";
import { selectAllOptions } from "../store/options/optionsSlice";

const QuizPage = () => {
  const option = useSelector(selectAllOptions);
  console.log(option);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};
export default QuizPage;
