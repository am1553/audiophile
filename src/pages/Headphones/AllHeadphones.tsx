import React, { ReactNode } from 'react'

import { PrimaryButton } from '../../components/ui/Buttons';
import {XX99MarkII, XX99MarkI, XX59} from './Images'

function AllHeadphones() {

  type ProductCardProps = {
    Image: ReactNode;
    newProduct: boolean;
    title: string;
    description: string;
    onClick: () => void;
    reverse?: boolean;
  }

  const ProductCard = ({Image, newProduct, title, description, onClick, reverse} : ProductCardProps) => {


    return(
      <div className={`my-28 max-w-5xl max-lg:px-10 flex max-lg:flex-col max-lg:gap-10 text-center justify-center items-center relative lg:grid lg:grid-cols-2 mx-auto`}>
        <div className={`w-full lg:max-w-[540px] ${reverse ? "col-start-2 row-start-1" : "col-start-1 row-start-1"}`}>
          {Image}
        </div>
        <div className={`flex flex-col gap-8 text-center justify-center items-center lg:text-left lg:items-start ${reverse ? "col-start-1 row-start-1" : "lg:ml-16 col-start-2 row-start-1"}`}>
          {newProduct ?  <span className='text-over-line tracking-[10px] uppercase text-peru font-thin'>new product</span> : null}
          <h1>{title}</h1>
          <p className='opacity-50 max-w-[80%]'>{description}</p>
          <PrimaryButton text='see product' onClick={onClick}/>
        </div>
      </div>
    )
  }



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