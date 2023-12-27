import React, { useState } from 'react'

export default function Itung3() {
  const [itung, setItung] = useState(0);

  const increment = () => {
    setItung(itung+1);
  }

  const decrement = () => {
    setItung(itung-1);
  }

  return (
    <div>
      <h2>Counter with hook: {itung}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}
