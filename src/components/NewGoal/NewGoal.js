import React, { useState } from "react";
import "./NewGoal.css";

import GoalList from "../GoalList/GoalList";

const NewGoal = (props) => {
  const [enteredtext, setEnteredText] = useState("");

  const addGoalHandler = (event) => {
    event.preventDefault();
    // console.log("Link navigation prevented!");

    const newGoal = {
      id: Math.random().toString(),
      text: enteredtext,
    };

    setEnteredText("");

    props.onAddGoal(newGoal);
  };

  const textChangehandler = (event) => {
    setEnteredText(event.target.value);

    // event.target.value is new value entered bby the user
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={enteredtext} onChange={textChangehandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
