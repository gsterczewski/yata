
import React from "react";
import BasicBar from "components/BasicBar";
import { filterStates } from "config";

export default function TodosSummaryDesktop({todosLeft, handleClearCompleted, handleShowAll, handleShowCompleted, handleShowActive, activeFilter}){
  return(
    <BasicBar classes="todos__summary todos__summary--desktop">
      <span>{todosLeft} items left</span>
      <button className={`filters__button ${activeFilter === filterStates.all ? "filters__button--active": "" }`} onClick={handleShowAll}>All</button>
      <button className={`filters__button ${activeFilter === filterStates.active ? "filters__button--active": "" }`} onClick={handleShowActive}>Active</button>
      <button className={`filters__button ${activeFilter === filterStates.completed ? "filters__button--active": "" }`} onClick={handleShowCompleted}>Completed</button>
      <button className="todos__clear-button" onClick={handleClearCompleted}>Clear Completed</button>
    </BasicBar>
  )
}