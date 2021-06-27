import React,{useState,useContext} from 'react'
import TodoContext from '../contexts/todoContext';
import { ITask } from '../interfaces/task';

interface headerProps {}
const Header: React.FC<headerProps> = () => {
  const[task,setTask]=useState<ITask>({taskName:"",deadline:0})
  const {todoDispatch}=useContext(TodoContext)
const handleChange=(event: React.ChangeEvent<HTMLInputElement>): void=>{
  const { name, value } = event.target;
  setTask((prevState) => ({
    ...prevState,
    [name]: value,
  }));
}
   const handleClick=(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void=>{
     if(task.taskName!==""&&task.deadline!==0){
       todoDispatch({type:"Add_Todo",payload:task})
       setTask({taskName:"",deadline:0})
     }else{
       alert('you should enter Task Name and the Deadline')
     }
   }
        return (<div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="taskName"
            value={task.taskName}
          onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline (in Days)..."
            name="deadline"
            value={task.deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleClick}>Add Task</button>
      </div>);
}
export default Header