
import React from "react";
import BasicBar from "components/BasicBar";

export default function TodosSummary({todosLeft, handleClearCompleted}){
  return(
    <BasicBar classes="todos__summary">
              <span>{todosLeft} items left</span>
              <button className="todos__clear-button" onClick={handleClearCompleted}>Clear Completed</button>
    </BasicBar>
  )
}