import React from 'react'
import { useForm } from '../hooks/useForm';

export const AddTodo = ({ handleAddTodo }) => {

    
    /** Se obtiene del Hook useForm el metodo handleInputChange para detectar cambios */
    const [{ description }, handleInputChange, reset] = useForm({ description: '' });
    
    /** evento para realizar el submit */
    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length < 1) return;

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        /** se usa para llamara al action del reducer */
        handleAddTodo( newTodo );

        /** metodo que permite limpiar el campo por medio del hook useForm */
        reset();
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    autoComplete="off"
                    className="form-control"
                    name="description"
                    placeholder="Tarea..."
                    type="text"
                    value={description}
                    onChange={handleInputChange}
                />
                <button
                    className="btn btn-outline-primary mt-1 btn-block"
                    style={{ "margin": "0" }}
                    type="submit"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
