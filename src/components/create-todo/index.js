// import React from "react";
import { useState } from "react";
import styles from "./index.module.css";
import { useLocalStorage } from "usehooks-ts";

function CreateTodo() {

    const [todos, setTodos] = useLocalStorage("TODO", []);

    // const [rodo,setTodo] = React.useState("");
    // let todo;
    const [todo, setTodo] = useState("");
    // let me = [];

    const saveTodos =() =>{
        // save all todos
        setTodos([...todos, todo]);
        // wipe the input box
        setTodo("");
    }
     
    // function collectInput(event){
    //     // todo = event.target.value;
    //     setTodo(event.target.value);
    //     // console.log(event.target.value);
    // }

    // const collectInput = event => setTodo(event.target.value);

    // function saveTodo(){
    //     // Add new todo to existing list of todos
    //     // todos.push(todo);
    //     // Set all todos in localstorage
    //    setTodos([...todos, todo]);
    // }


    return (
        <section className={styles.section}>
            <input 
            value={todo}
            onKeyDown={event => event.key == "Enter" && saveTodos()}
            onChange={event => setTodo(event.target.value)} className={styles.input} placeholder="Start typing..."/>
            <button onClick={() => setTodos([...todos, todo])} className={styles.button}>Create</button>
        </section>
    )
}

export default CreateTodo;