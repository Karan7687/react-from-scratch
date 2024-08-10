import React from "react";
import "./NewGoal.css";

import GoalList from "../GoalList/GoalList";

const NewGoal = (props) => {
  const addGoalHandler = (event) => {
    event.preventDefault();
    // console.log("Link navigation prevented!");

    const newGoal = {
      id: Math.random().toString(),
      text: "My dummy goal",
    };

    props.onAddGoal(newGoal);
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
