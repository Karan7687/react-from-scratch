import React from "react";

const UpdateList = (props) => {
  return (
    <div>
       {props.arr.map((goal) => {
        return <li key={goal.id}>{goal.text}</li>;
      })}
    </div>
  );
};
export default UpdateList;
