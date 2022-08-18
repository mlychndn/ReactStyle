import React from "react";
import "./CourseGoalList.css";
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

const CourseGoalList = (props) => {
  return (
    <ul className="goal-list">
      <CourseGoalItem courseName={props.courseName} />
    </ul>
  );
};

export default CourseGoalList;
