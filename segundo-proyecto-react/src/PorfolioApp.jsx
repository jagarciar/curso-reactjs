//Hacer uso del snippet rafc
import React from 'react'
import './PorfolioApp.css'

//Aún cuando en PorfolioApp.css se sobre-escribe la clase rojo, el jala la del padre.

export const PorfolioApp = () => {

  const active = true

  const style = {
    color: active ? 'red' : 'yellow'
  }

  return (
    <div>
        <h1 className='rojo'>Esta es mi aplicación de Porfolio</h1>
        <h4 style={style}>Este es mi primer componente</h4>
        <p>!Hola mundo desde React!</p>
    </div>
  )
}
