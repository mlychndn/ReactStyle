import React, { useState } from "react";
import styles from "./CourseInput.module.css";
import Button from "../../UI/Button";

const CourseInput = (props) => {
  const [initialInput, setInitialInput] = useState("");
  const [isValid, setIsValid] = useState(true);

  const inputHandler = (event) => {
    setIsValid(true);
    setInitialInput(event.target.value);
  };

  const courseGoalHandler = (event) => {
    event.preventDefault();

    !initialInput.trim() ? setIsValid(false) : setIsValid(true);
    if (!initialInput.trim()) {
      return;
    }
    props.onCourseAddEvent(initialInput);
    setInitialInput("");
  };

  return (
    <form onSubmit={courseGoalHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles["invalid"]}`}
      >
        <label>Course Goal</label>
        <input type="text" value={initialInput} onChange={inputHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
