import React, { ReactNode } from 'react'

import { PrimaryButton } from '../../components/ui/Buttons';
import { ProductCard } from '../../components/ui/ProductCard';
import {XX99MarkII, XX99MarkI, XX59} from './Images'
import {ResponsiveImage} from '../../components/ui/ResponsiveImage'

function AllHeadphones() {

  return (
    <section className=''>
      <ProductCard 
        Image = {<XX99MarkII />}
        newProduct = {true}
        title = "XX99 Mark II Headphones"
        description= "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        onClick={() => {return}}
      />
      <ProductCard 
        Image = {<XX99MarkI />}
        newProduct = {false}
        reverse
        title = "XX99 Mark I Headphones"
        description= "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
        onClick={() => {return}}
      />
      <ProductCard 
        Image = {<XX59 />}
        newProduct = {false}
        title = "XX59 Headphones"
        description= "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
        onClick={() => {return}}
      />
    </section>
  )
}

export default AllHeadphones