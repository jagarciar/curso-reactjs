import React from 'react'
import { Parametros2App } from './Parametros2App'

export const ParametrosApp = (props) => {
  return (
    <>
    <div>{props.string}</div>
    <Parametros2App string = "Y mi segundo nombre es Andrés" number={10}/>
    <Parametros2App string = "Y mi primer apellido es Garcia" />
    </>
  )
}
