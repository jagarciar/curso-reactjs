# Ciclo de vida de un componente

> El **estado** es todo aquel dato o información que puede cambiar de valor durante el ciclo de vida de un componente. 

## Hooks

> Los **hooks** son funciones que permiten utilizar el estado de un componente funcional.

### useState

A través del hook **useState** podemos **actualizar** el **valor** del **estado** de un **componente funcional**. Esta función retorna dos elementos, el primero es el valor actual del elemento y el segundo es una función que permite actualizar el elemento. 

En el siguiente ejemplo creamos el componente **CounterApp**. En este componente se definió la variable **count**, la cuál se inicializará con valor 0. La inicialización de la variable **count** se da por la asignación **useState(0)**. Adicionalmente se definió la función **setCount** la cuál actualizará el valor de la variable **count**. 

El componente funcional **CounterApp** retorna dos elementos. El primer elemento es un parráfo que mostrará el valor de la variable **count**. El segundo elemento es un botón el cuál a través del evento **onClick** invoca la función **setCount**. 
 
```javascript
import React from 'react'
import { useState } from 'react';

export const CounterApp = () => {

  const [count, setCount] = useState(0);

  return (
    <>
      <p>El valor del contador es : {count}</p>
      <button onClick={()=> setCount(count+1)}/>
    </>
  )
}
```

Veamos otro ejemplo : Se creó el componente **CalcApp** el cual tiene tres variables : **num1** , **num2** y **resultado**, todas inicializadas con 0. Este componente permite la suma de dos números : **num1** y **num2** y actualiza el valor de la suma en la variable **resultado**.  

> Para actualizar el valor de un elemento input debemos hacer uso del evento **onChange** y obtener el valor ingresado a través del argumento **event** y la propiedad **event.target.value**. 

**CalcApp** tiene implementado tres funciones : **sum**, **handleChangeNum1** y **handleChangeNum2**. La función **handleChangeNum1** actualiza el valor de la variable **num1**. La función **handleChangeNum2** actualiza el valor de la variable **num2**. La función **sum** es invocada cuando se desencadena el evento **onClick** del botón encargado de sumar ambas variables. 

```javascript
import React, { useState } from 'react'

export const CalcApp = () => {

    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [resultado, setResultado] = useState(0)

    const sum = () => {
        setResultado(parseInt(num1+num2))
    }

    const handleChangeNum1 = (event)  => {
        setNum1(parseInt(event.target.value))
    }

    const handleChangeNum2 = (event)  => {
        setNum2(parseInt(event.target.value))
    }

    return (
        <>

            <input id="num1" type="number" onChange={handleChangeNum1} />
            <input id="num2" type="number" onChange={handleChangeNum2} />
            <button onClick={sum}>Sumar</button>
            <p>El resultado es {resultado}</p>
        </>
    )
}
```