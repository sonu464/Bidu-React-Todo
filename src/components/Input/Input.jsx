import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {
  // ____________________ Add Todo ____________________
  const addTodo = (event) => {
    event.preventDefault();
    setInputValue("");
    if (inputValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onSaveTodoData(inputValue);
  };

  // _________________ Change Handler ___________________
  const inputChange = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const [isValid, setIsValid] = useState(true);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={`container ${!isValid ? "invalid" : ""}`}>
      <label>Hey type here something</label>
      <input
        type="text"
        value={inputValue}
        onChange={inputChange}
        placeholder="Try to enter something"
      />
      <button className="goal-btn" onClick={addTodo}>
        Add Goal
      </button>
    </div>
  );
};

export default Input;
