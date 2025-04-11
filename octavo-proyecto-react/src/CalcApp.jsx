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
