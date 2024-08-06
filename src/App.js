import React, { useState } from "react";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";
import UpdateList from "./components/UpdateList/UpdateList";

import "./App.css";

const App = () => {
  const arr = [
    { id: "course1", text: "React Native" },
    { id: "course2", text: "Next JS" },
    { id: "course3", text: "GO LANG" },
    { id: "course4", text: "RUST" },
    { id: "course5", text: "Kubernets" },
    { id: "course6", text: "JAvascript" },
    { id: "course7", text: "Java" },
    { id: "course8", text: "Node" },
    { id: "course9", text: "Django" },
    //array is created to pass as props from app to GoalList
  ];

  const updateArr = [
    { id: "1", text: "array passed successfully" },
    { id: "2", text: "array Accessed successfully" },
    
  ];

  const addGoalHandler = (NewGoal) => {};

  return (
    <div className="course-goals">
      <h1>COURSE</h1>
      <NewGoal onAddGoal={addGoalHandler} />

      <GoalList arrProp={arr} />
      <UpdateList arr={updateArr}/>

    </div>
  );
};

export default App;
