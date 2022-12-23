import React from 'react'

function Banner({title} : {title:string}) {
  return (
    <header className='bg-black h-48 text-white flex items-end justify-center pb-6 md:h-64 md:pb-12 lg:h-80 lg:pb-20'>
        <h2>{title}</h2>
    </header>
  )
}

export default Banner