import React, { useEffect, useReducer } from 'react';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { todoReducer } from './todoReducer';

export const TodoApp = () => {

    /** Instancia el estado inicial del reducer */
    const init = () => { return JSON.parse(localStorage.getItem("todos")) || []; }

    const [todos, dispatch] = useReducer(todoReducer, [], init)


   
    /** detecta cualquier cambio del todos para guardar en localStorage */
    useEffect(() => { localStorage.setItem("todos", JSON.stringify(todos)); }, [todos]);

    const handleDelete = (todoID) => {

        const action = {
            type: "delete",
            payload: todoID
        }

        dispatch(action);
    }

    const handleToggle = (todoID) => {

        dispatch({
            type: "toggle",
            payload: todoID
        });

    }

    const handleAddTodo = ( newTodo ) =>{
        dispatch({
            type: "add",
            payload: newTodo
        });
    }


    return (
        <div>
            <div className="row">
                <div className="col-8">
                    <h1>TODO App </h1>
                </div>
                
                <div className="col-4 task-counter">
                    <h4>task: ({todos.length})</h4>
                </div>
            </div>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                </div>
                <div className="col-5">
                    <AddTodo
                        handleAddTodo = { handleAddTodo }
                    />
                </div>
            </div>
        </div>
    )
}
