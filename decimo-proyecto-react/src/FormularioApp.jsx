import React from 'react'
import { useState } from 'react'
import { ItemApp } from './ItemApp'

export const FormularioApp = () => {

    const [tareas, setTareas] = useState([])
    const [nuevaTarea, setNuevaTarea] = useState('');

    const handleClick = (event) => {
        console.log(tareas);
        const tam = tareas.length + 1;
        setTareas([...tareas, { id: tam, tarea: nuevaTarea }]);
        console.log(tareas);
    }

    const handleChange = (event) => {
        setNuevaTarea(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Digite la tarea' onChange={handleChange} />
                <button onClick={handleClick}>Adicionar</button>
            </form>
            <ul>
                {tareas && tareas.map(x => <ItemApp key={x.id} value={x.tarea} label={x.tarea} />)}
            </ul>
        </>
    )
}
