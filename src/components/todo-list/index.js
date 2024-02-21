// import React, { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import TodoItem from "../todo-item";


function TodoList() {

const [todos, setTodos] = useLocalStorage("TODO", []);

/* 
    // let todos;
    function getTodos() {
       let todos = JSON.parse(localStorage.getItem("TODO_KEY")) || [];
            //Update React State
       setTodos(todos);
    }

    useEffect(getTodos, []); */
    return (
        <ul className="list-group">
            {todos.map(function(todo, index){
                return <TodoItem todo={todo} index={index}/>
            })}
        </ul>
    );
}

export default TodoList;