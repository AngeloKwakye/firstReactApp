// import React, { useEffect } from "react";
import { useState,useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import styles from "./index.module.css"


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