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

    // event.target.value is new value entered by the user
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={enteredtext} onChange={textChangehandler} />
      {/* as soon as the user types it triggers textChangehandler and there textChangehandler updates enteredtext. */}
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;

// eslint-disable-next-line no-lone-blocks
{/*1)  As User types something, it triggers the event onChange on text and texthangeHandler is called and new value is given to enteredText
  User types in the input field:

The onSubmit event triggers the addGoalHandler function.
event.preventDefault() is called to prevent the form from submitting and causing a page refresh.
A new goal object is created:

An id is generated using Math.random().toString().
The text property of the new goal is set to the current value of enteredtext.
The input field is cleared:

setEnteredText("") is called to reset the input field to an empty string.
The new goal object is passed to the parent component:

props.onAddGoal(newGoal) is called, passing the new goal object to the parent component.
Parent component updates its state:

The parent component updates its state to include the new goal in the list.
Parent component and its children re-render:

The parent component and its children (e.g., GoalList) re-render to reflect the updated list of goals.
Updated goal list is displayed:

The user sees the updated goal list with the newly added goal.
The input field is cleared and ready for the next entry.*/}