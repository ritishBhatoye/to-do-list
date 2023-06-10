import React,{useReducer} from "react";
import {Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import {TodoContext} from "./Context/TodoContext";
import todoReducer from "./Context/reducer";
import TodoForm from "./Components/TodoForm.js";
import Todos from "./Components/Todos";

const App=()=>
{
const [todos,dispatch]=useReducer(todoReducer, []);


  return(
<TodoContext.Provider value={{todos,dispatch}}>
<Container fluid className="blur">
  <h3>Todo App using Context API</h3>
<Todos /> 
  <TodoForm />
</Container>
</TodoContext.Provider>

  );
}
export default App;
