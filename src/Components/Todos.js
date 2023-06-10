import React,{useContext} from "react";
import {ListGroup,ListGroupItem} from "reactstrap";
import {FaCheckDouble} from "react-icons/fa";
import {TodoContext} from  "../Context/TodoContext.js";
import {REMOVE_TODO} from "../Context/action.types"


const Todos=()=>
{
const {todos,dispatch}=useContext(TodoContext);


return (
    <ListGroup className="mt-5 mb-2 items floating">
        {todos.map(todo=>(
            <ListGroupItem key={todo.id}>
            {todo.todoString}
            <span className="check"
            onClick={()=>
            {
                dispatch(
                    {
                        type:REMOVE_TODO,
                        payload:todo.id
                    }
                )
            }}
            >
                <FaCheckDouble />
                </span>
            </ListGroupItem>
        ))}
    </ListGroup>
)
};

export default Todos;