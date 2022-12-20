import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState<number>(4)

    const increaseCount = () => setCount(count + 1);
    const decreaseCount = () => setCount(count === 0 ? 0 : count - 1)

  return (
    <div className='h-12 bg-light-grey w-fit'>
        <button className='w-10 opacity-20 h-full hover:text-peru hover:opacity-100' onClick={decreaseCount}>
            -
        </button>
        <span>{count}</span>
        <button className='w-10 opacity-20 h-full hover:text-peru hover:opacity-100' onClick={increaseCount}>
            +
        </button>
    </div>
  )
}

export default Counter