import React, { useState } from "react";
import "./CourseInput.css";
import Button from "../../UI/Button";

const CourseInput = (props) => {
  const [initialInput, setInitialInput] = useState("");

  const inputHandler = (event) => {
    setInitialInput(event.target.value);
  };

  const courseGoalHandler = (event) => {
    event.preventDefault();
    props.onCourseAddEvent(initialInput);
    setInitialInput("");
  };

  return (
    <form onSubmit={courseGoalHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" value={initialInput} onChange={inputHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
