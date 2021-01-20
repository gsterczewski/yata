
import React from "react";
import BasicBar from "components/BasicBar";

export default function TodoFilters({handleShowAll, handleShowActive, handleShowCompleted}){
  return (
    <BasicBar  classes="filters rounded">
      <button className="filters__button filters__button--active">All</button>
      <button className="filters__button">Active</button>
      <button className="filters__button">Completed</button>
    </BasicBar>
  )
}