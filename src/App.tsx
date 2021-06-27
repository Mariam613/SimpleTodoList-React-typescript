import React from "react";
import "./App.css";
import {TodoProvider} from "./contexts/todoContext"
import TodoPage from "./pages/todoPage";

export interface IApplicationProps {}
const App:React.FC<IApplicationProps> = () => {

  return (
    <TodoProvider>
      <div className="App">
        <TodoPage/>
      </div>
     </TodoProvider>
  );
};

export default App;
