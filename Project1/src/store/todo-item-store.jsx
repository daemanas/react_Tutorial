import { createContext } from "react";
import { useReducer } from "react";
export const TodoItemsContext = createContext({
    todoItems :[],
    addNewItem:() =>{},
    DeleteItem:() =>{}
});

const TodoItemReducer = (currTodoItem, action) => {
    let newTodoItems = currTodoItem;
    if(action.type === "NEW_ITEM") {
        newTodoItems = [
        ...currTodoItem,
        {
            name:action.payload.itemName,
            dueDate:action.payload.dueDate
        }
        ]
    } else if (action.type === "DELETE_ITEM"){
        newTodoItems = currTodoItem.filter(
        (item) => item.name !== action.payload.itemName
        )
    }
    return newTodoItems;
}

const TodoItemsContextProvider =({children}) => {

  const [todoItems, dispatchTodoItem] = useReducer(TodoItemReducer, [])

    const addNewItem = (itemName, itemDate) => {
      const newItemAction = {
        type:"NEW_ITEM",
        payload:{
          itemName,
          itemDate
        }
      }
      dispatchTodoItem(newItemAction);
    }
  const DeleteItem = (todoItemName) => {
    const deleteItemAction ={
      type:"DELETE_ITEM",
      payload:{
        itemName:todoItemName,
      }
    }
    dispatchTodoItem(deleteItemAction);
  };
  return (
        <TodoItemsContext.Provider value={{
        todoItems,
        addNewItem,
        DeleteItem}}>
            {children}
        </TodoItemsContext.Provider>
    );
}

export default TodoItemsContextProvider;