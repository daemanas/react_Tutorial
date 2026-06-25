import { useState, useRef, useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";

function AddToDo(){
    const {addNewItem} = useContext(TodoItemsContext)
    
    const todoNameElement = useRef();
    const tododuedateElement = useRef();


    const handalAddButton = (event) => {
        event.preventDefault();
        const TodoItem = todoNameElement.current.value;
        const TodoDate = tododuedateElement.current.value;
        todoNameElement.current.value = "";
        tododuedateElement.current.value = "";
        addNewItem(TodoItem, TodoDate);
    }
    return (
        <div className="container text-center">
            <form className="row" onSubmit={handalAddButton}>
                <div className="col-4">
                    <input 
                        type="text" 
                        ref={todoNameElement} />
                </div>
                <div className="col-4">
                    <input 
                        type="date" 
                        ref ={tododuedateElement}/>
                </div>
                <div className="col-2">
                    <button type="submit" className="btn btn-success" >Add</button>
                </div>
                
            </form>
        </div>
    );
}

export default AddToDo;