import React from "react";
import "./NewGoal.css";

import GoalList from "../GoalList/GoalList";

const NewGoal = (props) => {
  let enteredtext = "";

  const textChangehandler = (event) => {
    enteredtext = event.target.value;
    // event.target.value is new value entered bby the user



  };

  const addGoalHandler = (event) => {
    event.preventDefault();
    // console.log("Link navigation prevented!");

    const newGoal = {
      id: Math.random().toString(),
      text: enteredtext 
    };

    props.onAddGoal(newGoal);
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" onChange={textChangehandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
