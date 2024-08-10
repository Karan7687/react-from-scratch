import React, { useState } from "react";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

import "./App.css";

const App = () => {
  const arr = [
    { id: "course1", text: "React Native" },
    { id: "course2", text: "Next JS" },
    { id: "course3", text: "GO LANG" },
    { id: "course7", text: "Java" },
    { id: "course8", text: "Node" },
    { id: "course9", text: "Django" },
    //array is created to pass as props from app to GoalList
  ];

  const addGoalHandler = (NewGoal) => {
    arr.push(NewGoal);
    console.log(arr);
  };

  return (
    <div className="course-goals">
      <h1>COURSE</h1>
      <NewGoal onAddGoal={addGoalHandler} />

      <GoalList arrProp={arr} />
    </div>
  );
};

export default App;
