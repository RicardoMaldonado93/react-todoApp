import React from 'react'

export const TodoItem = React.memo(({ todo, index, handleDelete, handleToggle }) => {

    return (

        <li
            className="list-group-item"
            key={todo.id}
        >
            <div className="flex-row item">
                <div className="flex-column index">
                    <p> {index + 1}. </p>
                </div>

                <div className="flex-column text">
                    <p
                        className={`${todo.done && 'complete'} task`}
                        onClick={() => handleToggle(todo.id)}
                    >
                    {todo.desc}
                    </p>

                </div>

            </div>

            <button
                className="btn btn-danger btn-standard"
                onClick={() => handleDelete(todo.id)}
            >
                Borrar
            </button>
            <button
                className="btn btn-danger btn-small"
                onClick={() => handleDelete(todo.id)}
            >
                X
            </button>
        </li>
    )
}
)