"use client";
import Link from 'next/link'
import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
 
  return (
    <div className='text-7xl gap-8 justify-center items-center flex '>
      <button onClick={() => setCount(count - 1)}>
        -
      </button>
      <span>
        {count}
      </span>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>

    </div>
  )
}

export default Counter
