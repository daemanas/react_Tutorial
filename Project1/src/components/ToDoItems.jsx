import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";
import ToDoItem from "./TodoItem";

const ToDoItems = () => {
    
    const contextObj = useContext(TodoItemsContext)
    const todoItems = contextObj.todoItems;

    return(
        <>
        <div className="Item-container">
            {todoItems.map((Items) =>(
                <ToDoItem 
                    key={Items.name} 
                    ToDoItem={Items.name} 
                    ToDoDate={Items.dueDate}/> 
                ))}
        </div>
    </>);
}

export default ToDoItems;