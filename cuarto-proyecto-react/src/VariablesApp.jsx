import React from 'react'
import './VariablesApp.css'

const string = 'Curso de React' //Muestra un texto
const string2 = "Digital House" //Muestra un texto
const string3 = `Este es un ${string} que estas cursando en ${string2}`//Muestra la combinación de dos string
const num = 1 //Muestra un número
const num2 = 1.5 //Muestra un número
const array = ['HTML', 'CSS', 'JavaScript', 'React'] //Muestra cada elemento del arreglo en la misma línea
const set = new Set([1,2,3,4,5]) //Aun cuando es un objeto, en tiempo de ejecución se deriva a un array
const boolean = false //No se muestra
const boolean2 = true //No se muestra
const foo = () => "Este es un string devuelto por una función"
const object = { nombre : 'Jeyson', edad : 33} //Falla en tiempo de ejecución si se imprime sin el JSON.stringify
const date = new Date() //Es preferible imprimir a través de JSON.stringify

// Este componente se creo a través del snippet rfca
export const VariablesApp = () => {
    return (
        <>
            <div className='center'>
                <div>
                    {string3}
                </div>
                <div>
                    {array}
                </div>
                <div>
                    {foo()}
                </div>
                <div>
                    {JSON.stringify(object)}
                </div>
                <div>
                    {set}
                </div>
                <div>
                    {JSON.stringify(date)}
                </div>
            </div>
        </>
    )
}
