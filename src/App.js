import React, { useState } from "react";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";
import "./App.css";

const App = () => {
  const [arr, setCourseGoals] = useState([
    { id: "course1", text: "React Native" },
    { id: "course2", text: "Next JS" },
    { id: "course3", text: "GO LANG" },
    { id: "course4", text: "RUST" },
    //array is created to pass as props from app to GoalList
  ]);

  const addGoalHandler = (NewGoal) => {
    setCourseGoals(arr.concat(NewGoal));
  };

  // const arr = [
  //   { id: "course1", text: "React Native" },
  //   { id: "course2", text: "Next JS" },
  //   { id: "course3", text: "GO LANG" },
  //   { id: "course4", text: "RUST" },
  //   //array is created to pass as props from app to GoalList
  // ];

  return (
    <div className="course-goals">
      <h1>COURSE</h1>
      <NewGoal onAddGoal={addGoalHandler} />
      <GoalList arrProp={arr} />
    </div>
  );
};

export default App;
