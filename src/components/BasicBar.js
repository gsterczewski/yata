import React from "react";


export default function BasicBar({classes="", children}){
  const computedClass = `basic-bar ${classes}`
  return (
    <div className={computedClass}>
      {children}
    </div>
  )
}