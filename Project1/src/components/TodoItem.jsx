import { useContext } from "react";
import {AiFillDelete} from "react-icons/ai"
import { TodoItemsContext } from "../store/todo-item-store";
function ToDoItem({ToDoItem, ToDoDate, onDeleteButton}) {

  const {DeleteItem} = useContext(TodoItemsContext);
    return(
        <div className="container text-center">
          <div className="row">
            <div className="col-4">
              {ToDoItem}
            </div>
            <div className="col-4">
              {ToDoDate}
            </div>
            <div className="col-2">
              <button 
                type="button" 
                className="btn btn-denger" 
                onClick={() =>DeleteItem(ToDoItem)}>
               <AiFillDelete />
              </button>
            </div>
          </div>

        </div>
    );
}

export default ToDoItem;