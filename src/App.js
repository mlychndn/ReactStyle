import React, { useState } from "react";
import "./App.css";
import CourseInput from "./Components/CousreGoals/CourseInput/CourseInput";
import CourseGoalList from "./Components/CousreGoals/CourseGoalList/CourseGoalList";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const courseHandler = (course) => {
    console.log("ishhh", course);
    let cousreGoal = {
      id: "g" + (Math.floor(Math.random() * 100) + 1),
      text: course,
    };
    setCourseGoals([cousreGoal, ...courseGoals]);
  };

  let content = courseGoals.map((course) => (
    <CourseGoalList courseName={course.text} key={course.id} />
  ));

  return (
    <div>
      <section id="goal-form">
        <CourseInput onCourseAddEvent={courseHandler}></CourseInput>
      </section>
      <section id="goals">{content}</section>
    </div>
  );
};

export default App;
