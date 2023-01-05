import React, { SetStateAction, useState } from 'react'


type CounterProps = {
  currentCount: number;
  onChange: React.Dispatch<SetStateAction<number>>;
}

function Counter({currentCount, onChange}: CounterProps) {


    const increaseCount = () => onChange(currentCount + 1);
    const decreaseCount = () => onChange(currentCount === 0 ? 0 : currentCount - 1)

  return (
    <div className='h-12 bg-light-grey w-full grid grid-cols-3 items-center text-center'>
        <button className='opacity-20 h-full hover:text-peru hover:opacity-100' onClick={decreaseCount}>
            -
        </button>
        <span>{currentCount}</span>
        <button className='opacity-20 h-full hover:text-peru hover:opacity-100' onClick={increaseCount}>
            +
        </button>
    </div>
  )
}

export default Counter