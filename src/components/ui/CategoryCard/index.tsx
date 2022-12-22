import React from 'react'
import { TransparentButton } from '../Buttons'

type CategoryCardTypes = {
    image: string,
    title?: string,
    link?: string
}

function CategoryCard({image, title, link} : CategoryCardTypes) {
  return (
    <div className='relative w-[90%] mx-auto bg-grey bg-opacity-10 rounded-lg flex flex-col  items-center mt-20 pt-20 pb-4'>
        <img src={image} alt="" className='w-[100px] h-[100px] absolute -top-10'/>
        <h6>{title}</h6>
        <TransparentButton />
    </div>
  )
}

export default CategoryCard