import React, { useEffect } from "react";
import styles from "./index.module.css"


function TodoList() {

const [todos, setTodos] = React.useState([]);


    // let todos;
    function getTodos() {
       let todos = JSON.parse(localStorage.getItem("TODO")) || [];
            //Update React State
       setTodos(todos);
    }

    React.useEffect(getTodos, []);
    return (
        <div className={styles.todocontainer}>
        <ul>
            {todos.map(function(todo, index){
                return <li key={index}>{todo}</li>
            })}
        </ul>
        </div>
    );
}

export default TodoList;