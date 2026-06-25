import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";

const WelcomeMsg =() => {
    const contextObj = useContext(TodoItemsContext)
    const todoItems = contextObj.todoItems;
    return(
        todoItems.length === 0 && <h1>Welcome </h1>
    );
}

export default WelcomeMsg;