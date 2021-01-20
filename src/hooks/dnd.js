import { useState } from "react";

function swapElementsInArray(arr, index1,index2){
  const copy = [...arr]
  const temp = copy[index1];
  copy[index1] = copy[index2];
  copy[index2] = temp
  return copy;
}
export default function useDnd(collection, setter){
  const [draggedElement, setDraggedElement] = useState(null);
  
  function handleDragstart(event){
     
    setDraggedElement(event.target)
    
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.dropEffect = "move";
    
    // this is neccessary to hide element being drag but only after ghost image is created
    window.requestAnimationFrame(()=>{
      event.target.style.opacity = 0;
    })

  }

  function handleDragenter(event){
    const currentTarget = event.currentTarget;  
    const currentElementIndex = collection.findIndex(element => element.id === currentTarget.getAttribute("id"))
    const draggedElementIndex = collection.findIndex(element => element.id === draggedElement.getAttribute("id"))
      
      if(currentElementIndex !== draggedElementIndex){
        setter(swapElementsInArray(collection, currentElementIndex, draggedElementIndex))
      }
  }
  function handleDragover(event){
    event.preventDefault();
  }
  function handleDrop(event){
    event.preventDefault();
    draggedElement.style.opacity = 1;
  }
  return {
    handleDragstart,
    handleDragenter,
    handleDragover,
    handleDrop  
  }  
}