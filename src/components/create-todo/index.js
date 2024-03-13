// import React from "react";
import { useState } from "react";
import styles from "./index.module.css";

function CreateTodo() {

    // const [todos, setTodos] = useLocalStorage("TODO", []);

    // const [rodo,setTodo] = React.useState("");
    // let todo;
    const [todo, setTodo] = useState("");
    // let me = [];

    const saveTodos = async () =>{
        // save all todos
        // post to into the todo api 
        const response = await fetch('http://localhost:4000/todos', {
            method: 'POST',
            body: JSON.stringify({
                title: todo
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();
        console.log({data});
        // setTodos([...todos, todo]);
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
            <button onClick={() => setTodo(todo)} className={styles.button}>Create</button>
        </section>
    )
}

export default CreateTodo;