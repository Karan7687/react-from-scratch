import React from "react";
import "./NewGoal.css";
const NewGoal = () => {
  const addGoalHandler = (event) => {
    event.preventDefault();
    console.log("Link navigation prevented!");
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text"></input>
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
