import React from "react";
import "./GoalList.css"

const GoalList = props => {

  console.log(props.course)
  return(

    <ul className="list">

        {props.course.map((goal)=>{

          return<li>{goal.id}</li>

        })}

    </ul>
  );
};
export default GoalList;
