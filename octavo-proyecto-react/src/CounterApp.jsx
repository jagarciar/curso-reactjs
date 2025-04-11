import React from 'react'
import { useState } from 'react';

export const CounterApp = () => {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count+1);
  }

  return (
    <>
      <p>El valor del contador es : {count}</p>
      <button onClick={handleClick}/>
    </>
  )
}
