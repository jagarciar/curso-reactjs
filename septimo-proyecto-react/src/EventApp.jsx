import React from 'react'

const handleClick = (event, msg) => {
    console.log(event);
}

const Boton = (msg) => {
    return (
        <>
            <button onClick={(event) => 
                    handleClick(event, msg)}>
                Enviar
            </button>
        </>
    )
}


export const EventApp = () => {

    return (
        <>
            <Boton msg="Soy el segundo parámetro"/>
        </>
    )
}
