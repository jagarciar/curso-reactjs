import React from 'react'
import './PorfolioApp.css'

export const PorfolioApp = () => {

    const active = true

    const style = {
        color : active ? 'red' : 'black'
    }

    return (
        <>
            <div className='center'>
                <h1>Título</h1>
                <h2 className='id'>Subtitulo</h2>
                <h3 style={style}>Estilos</h3>
                <h4 style={{fontSize:'12px'}}>Estilos</h4>
            </div>
        </>
    )
}
