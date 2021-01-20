
import React from "react";
import BasicBar from "components/BasicBar";
import { filterStates } from "config";

export default function TodoFilters({handleShowAll, handleShowActive, handleShowCompleted, activeFilter}){
  return (
    <BasicBar  classes="filters rounded">
      <button className={`filters__button ${activeFilter === filterStates.all ? "filters__button--active": "" }`} onClick={handleShowAll}>All</button>
      <button className={`filters__button ${activeFilter === filterStates.active ? "filters__button--active": "" }`} onClick={handleShowActive}>Active</button>
      <button className={`filters__button ${activeFilter === filterStates.completed ? "filters__button--active": "" }`} onClick={handleShowCompleted}>Completed</button>
    </BasicBar>
  )
}