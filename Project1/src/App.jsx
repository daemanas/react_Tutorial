import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import "./App.css";
import ToDoItems from "./components/ToDoItems";

import WelcomeMsg from "./components/Welcomemsg";
import TodoItemsContextProvider from "./store/todo-item-store";

function App() {


  return (
    <TodoItemsContextProvider>
      <center className="todo-container" >
        <AppName/>
        <AddToDo/>
        <WelcomeMsg />
        <ToDoItems/>
      
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
