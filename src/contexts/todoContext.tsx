import  React  from 'react';
import { TodoActions, TodoState ,todoReducer} from './../reducers/todoReducer';

export const initialTodoState:TodoState={
    tasks:[]
}

export interface ITodoContext{
    todoState:TodoState,
    todoDispatch:React.Dispatch<TodoActions>
}
export const TodoContext = React.createContext<ITodoContext>({
  todoState:initialTodoState,
  todoDispatch:()=>{}
});
export const TodoProvider = ({ children }:{children:React.ReactNode}) => {
  const [todoState, todoDispatch] = React.useReducer(todoReducer, initialTodoState);

  return (
    <TodoContext.Provider value={{ todoState, todoDispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
export default TodoContext;