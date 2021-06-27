import { ITask } from './../interfaces/task';
export type TodoActions={
    type:"Add_Todo"|"Delete_Todo",
    payload:ITask
}
export interface TodoState{
tasks:ITask[]
}

export const todoReducer=(state:TodoState,action:TodoActions)=>{
    const task=action.payload
    switch(action.type){
     case 'Add_Todo':
       return {...state,tasks:[...state.tasks,task]}
     case "Delete_Todo":
        const newState=state.tasks.filter((t)=>t.taskName!==task.taskName)
        return {...state,tasks:newState}
     default:
        return state
}
}