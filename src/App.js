import React from "react";
import GoalList from "./components/GoalList";
import "./App.css";

const App = () => {
  const arr = [
    { id: "course1", text: "React Native" },
    { id: "course2", text: "Next JS" },
    { id: "course3", text: "GO LANG" },
    { id: "course4", text: "RUST" },
    //array is created to pass as props from app to GoalList
  ];

  return (
    <div className="course-goals">
      <h1>COURSE</h1>
      <GoalList course={arr}/>
    </div>
  );
};

export default App;
