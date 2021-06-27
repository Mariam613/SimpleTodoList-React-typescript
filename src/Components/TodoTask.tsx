import React,{useContext} from "react";
import TodoContext from "../contexts/todoContext";
import { ITask } from "../interfaces/task";

type TodoTaskProp={
  task:ITask
}
const TodoTask:React.FC<TodoTaskProp> = ({task}) => {
 const{todoDispatch}=useContext(TodoContext)
 const handleClick=(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void=>{
 todoDispatch({type:"Delete_Todo",payload:task})
 }
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button
      onClick={handleClick}
      >
        X
      </button>
    </div>
  );
};

export default TodoTask;
