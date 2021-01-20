import { useState, useEffect } from "react";

function swapElementsInArray(arr, index1,index2){
  const copy = [...arr]
  const temp = copy[index1];
  copy[index1] = copy[index2];
  copy[index2] = temp
  return copy;
}
export default function useDnd(collection, setter){
  
  const [elements, setElements] = useState([...collection]);
  const [draggedElement, setDraggedElement] = useState(null);
  
  useEffect(() => {
    setter(elements)
  },[elements])
  
  
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
    const currentElementIndex = elements.findIndex(element => element.id === currentTarget.getAttribute("id"))
    const draggedElementIndex = elements.findIndex(element => element.id === draggedElement.getAttribute("id"))
      
      if(currentElementIndex !== draggedElementIndex){
        setElements(swapElementsInArray(elements, currentElementIndex, draggedElementIndex))
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