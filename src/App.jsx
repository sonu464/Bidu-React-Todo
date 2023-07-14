import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import Goals from "./components/Goals/Goals";

let dummyObject = [
  {
    id: "e1",
    text: "Thank You for Coming  *_* ",
  },
];

function App() {
  const [todoObject, setTodoObject] = useState(dummyObject);

  const sendValueToLi = (todoList) => {
    let userInput = [
      {
        id: Math.random().toString(),
        text: todoList,
      },
    ];

    setTodoObject((prevObject) => {
      return [...userInput, ...prevObject];
    });
  };

  return (
    <div className="App">
      <Input onSaveTodoData={sendValueToLi} />
      <Goals textList={todoObject} />
    </div>
  );
}

export default App;
