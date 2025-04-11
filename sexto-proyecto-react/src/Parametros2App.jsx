import React from 'react'
import { Parametros3App } from './Parametros3App'

export const Parametros2App = ({ string, number }) => {
    return (
        <><div>{string}</div><div>{number}</div>
        <Parametros3App string="OMG" /></>
    )
}
