import React from "react";
import "./CousreGoalItem.css";

const CourseGoalItem = (props) => {
  return <li className="goal-item">{props.courseName}</li>;
};

export default CourseGoalItem;
