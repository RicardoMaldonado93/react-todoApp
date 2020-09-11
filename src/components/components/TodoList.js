import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = React.memo(({ todos = [], handleDelete, handleToggle }) => {

    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo, i) => (
                    <TodoItem
                        todo={todo}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                        index={i}
                        key={todo.id}
                    />
                ))
            }
        </ul>
    )
})
