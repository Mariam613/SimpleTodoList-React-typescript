import React,{useContext} from 'react'
import TodoTask from '../Components/TodoTask';
import {TodoContext} from "../contexts/todoContext"
import Header from '../layout/header';

interface taskPageProps {}

const TodoPage:React.FC<taskPageProps> = () => {
  const {todoState}=useContext(TodoContext)
  // console.log(todoState);
  
  return (
    <>
    <Header/>
   <div className="todoList">
     {todoState.tasks.length!==0?
     (
       todoState.tasks.map((t,i)=>(
        <TodoTask task={t} key={i} />
       ))
     ):(
       <p>No tasks added yet</p>
     )
     }
  </div>
  </>
  );
};

export default TodoPage;