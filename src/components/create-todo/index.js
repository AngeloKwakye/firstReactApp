// import React from "react";
import styles from "./index.module.css";

function CreateTodo() {
    // const [rodo,setTodo] = React.useState("");
    let todo;
    // let me = [];
     
    function collectInput(event){
        todo = event.target.value;
        // console.log(event.target.value);
    }

    function saveTodo(){
        // get existing list of todos from localstorage
        let todos = JSON.parse(localStorage.getItem("TODO")) || [];
        // Add new todo to existing list of todos
        todos.push(todo);
        // Set all todos in localstorage
        localStorage.setItem("TODO", JSON.stringify(todos));
        // console.log("saveTodo")
    }


    return (
        <section className={styles.section}>
            <input onChange={collectInput} className={styles.input} placeholder="Start typing..."/>
            <button onClick={saveTodo} className={styles.button}>Create</button>
        </section>
    )
}

export default CreateTodo;