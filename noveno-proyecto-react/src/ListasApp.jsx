import React from 'react'
import { useState } from 'react';
import { Numeros } from './Numeros'
import { ItemApp } from './ItemApp';

export const ListasApp = () => {
  
    const [numbers, setNumbers] = useState(Numeros);

    const handleClick = (event) => {
        let lastNumber = numbers[numbers.length - 1] + 1;
        setNumbers([...numbers, lastNumber]);
    }

    return (
        <>
        <ul>
            {numbers.map(x => <ItemApp key={x} label={x} value={x} />)}
        </ul>
        <button onClick={handleClick}>Adicionar</button>
        </>
    )
}
