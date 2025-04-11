import React, { Component } from 'react'
import './PorfolioApp.css'

// Mediante el snippet rcc se puede crear un componente de clase 

export default class PorfolioApp extends Component {
    render() {
        return (
            <div>
                <h1 className='rojo'>Esta es mi aplicación de Porfolio</h1>
                <h4>Este es mi primer componente</h4>
                <p>!Hola mundo desde React!</p>
            </div>
        )
    }
}
